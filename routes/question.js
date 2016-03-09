var questionData = require('../questions.json');
var hisData = require('../evals.json');
var info = require('../logininfo.json');

exports.viewQuestion = function(req, res) {	
	var name = req.query.q;
	var name2 = req.query.id;
	var errorStr = "";
	var loginFlag= false;
	var loginErr = false;
	var levelUp = false;
	var curUserIdx = info['curUserIdx'];

	// storing career information into the user's specific json
	var input1 = req.query.inputDefault1;
	var input2 = req.query.inputDefault2;

	if( input1 != input2){
		questionData['user'][curUserIdx]['careerPosition'] = input1;
		questionData['user'][curUserIdx]['careerCompany'] = input2;
	}


	if( name != undefined && name2 != undefined && curUserIdx != -1){
		name2 = parseInt(name2);
		questionData['user'][curUserIdx]['questionText'][name2]['answered'] = true;
	}

		var numAns = 0;

		for( i = 0; i < questionData['user'][curUserIdx]['questionText'].length; i++) {
			if( questionData['user'][curUserIdx]['questionText'][i]['answered'] === true){
				numAns= numAns + 1;
			}
		}

		if( questionData['user'][curUserIdx]['lockedQuestionText'].length >= 2 && numAns == questionData['user'][curUserIdx]['questionText'].length){

			levelUp = true;

			var json = questionData['user'][curUserIdx]['lockedQuestionText'].pop();
			questionData['user'][curUserIdx]["questionText"].push(json);

			json = questionData['user'][curUserIdx]['lockedQuestionText'].pop();
			questionData['user'][curUserIdx]["questionText"].push(json);

			json = questionData['user'][curUserIdx]['lockedPoses'].pop();
			questionData['user'][curUserIdx]["unlockedPoses"].push(json);

			var level = parseInt(questionData['user'][curUserIdx]["level"]) + 1;
			questionData['user'][curUserIdx]["level"] = "" + level;

		}

		var login = req.query.login;

		if( login != undefined ){
			var username = req.query.username1;
			var password = req.query.password1;
			for( i = 0; i < info['logintable'].length; i++)
				if( info['logintable'][i]['username'] === username && info['logintable'][i]['password'] === password){
					loginFlag = true;
					break;
				}
			// what if login cannot be found?
			if( loginFlag == false ){
				errorStr = errorStr + "Login cannot be found";
				loginErr= true;
			}
			else{
				info['curUserIdx'] = info['logintable'][i]['userIdx'];
				curUserIdx = info['curUserIdx'];
			}
		}
	

	if( loginErr ){
		res.redirect("/login?error=true&errorStr="+errorStr);
	}
	
	else {
		var lvl = parseInt(questionData['user'][info['curUserIdx']]['level']);
		var lvlName = questionData['user'][info['curUserIdx']]['levelNames'][lvl]['name'];

		questionData['user'][info['curUserIdx']]["login"] = true;

		res.render('question', {
	    	"lockedQuestionText" : questionData['user'][info['curUserIdx']]['lockedQuestionText'],    	
	    	"questionText" : questionData['user'][info['curUserIdx']]['questionText'],
	    	"levelName" : lvlName,
	    	"levelUp" : levelUp
	    });
	}
	
};

// will be called when the user logs in
exports.viewQuestionPost = function(req, res) {	
	var name = req.body.q;
	var name2 = req.body.id;

	var errorStr = "";

	var loginFlag= false;
	
	var normalFlag = false;

	var loginErr = false;

	var levelUp = false;

	var curUserIdx = info['curUserIdx'];
	
		var login = req.body.login;

		if( login != undefined ){
			var username = req.body.username1;
			var password = req.body.password1;
			for( i = 0; i < info['logintable'].length; i++)
				if( info['logintable'][i]['username'] === username && info['logintable'][i]['password'] === password){
					loginFlag = true;
					break;
				}
			// what if login cannot be found?
			if( loginFlag == false ){
				errorStr = errorStr + "Login cannot be found";
				loginErr= true;
			}
			else{
				info['curUserIdx'] = info['logintable'][i]['userIdx'];
				curUserIdx = info['curUserIdx'];
			}
		}
	

	if( loginErr ){
		res.redirect("/login?error=true&errorStr="+errorStr);
	}
	
	else {
		var lvl = parseInt(questionData['user'][info['curUserIdx']]['level']);
		var lvlName = questionData['user'][info['curUserIdx']]['levelNames'][lvl]['name'];

		questionData['user'][info['curUserIdx']]["login"] = true;

		res.render('question', {
	    	"lockedQuestionText" : questionData['user'][info['curUserIdx']]['lockedQuestionText'],    	
	    	"questionText" : questionData['user'][info['curUserIdx']]['questionText'],
	    	"levelName" : lvlName,
	    	"levelUp" : levelUp
	    });
	}
	
};