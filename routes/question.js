var questionData = require('../questions.json');
var hisData = require('../evals.json');
var info = require('../logininfo.json');

exports.viewQuestion = function(req, res) {
	var name = req.query.q;
	var name2 = req.query.id;
	var errorStr = "";

	var loginFlag= false;
	var registerFlag= false;
	var normalFlag = false;

	var loginErr = false;
	var registerErr = false;

	if( name != undefined && name2 != undefined){
		var numAns = 0;
		normalFlag= true;
		name2 = parseInt(name2);
		questionData['questionText'][name2]['answered'] = true;;
		for( i = 0; i < questionData['questionText'].length; i++) {
			if( questionData['questionText'][i]['answered'] === true){
				numAns= numAns + 1;
			}
		}

		if( questionData['lockedQuestionText'].length >= 2 && numAns == questionData['questionText'].length){

			console.log( "Congrats! You have unlocked two additional interview questions. Keep it up!");
			console.log( "Congrats! You have earned an additional BADGE and LEVELED UP. Keep it up!");

			var json = questionData['lockedQuestionText'].pop();
			questionData["questionText"].push(json);

			json = questionData['lockedQuestionText'].pop();
			questionData["questionText"].push(json);

			json = questionData['lockedPoses'].pop();
			questionData["unlockedPoses"].push(json);

			var level = parseInt(questionData["level"]) + 1;
			questionData["level"] = "" + level;

		}
	}

	else{
		var login = req.query.login;
		var register = req.query.register;

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
		}

		else if ( register != undefined ){
			// passwords are not yet encrypted
			var username = req.query.username2;
			var password = req.query.password2;
			var password2 = req.query.password3;

			var pFlag = true;

			for( j = 0; j < info['logintable'].length; j++){
				if( info['logintable'][j]['username'] === username ){
					errorStr = errorStr + "Username taken";
					registerErr= true;
					break;
				}
			}

			if( password !== password2 ){
				if( registerErr )
					errorStr = errorStr + "; ";

				errorStr = errorStr + "Passwords do not match";
				pFlag = false;
				registerErr= true;

			}
		
			if( j == info['logintable'].length && pFlag) {
					var newMem = {
						"username" : username,
						"password" : password
					};
					info['logintable'].push(newMem);
					registerFlag = true;
			}
			
		}
	}


	if( loginErr || registerErr){
		res.redirect("/login?error=true&errorStr="+errorStr);
	}
	else {
		var lvl = parseInt(questionData['level']);
		var lvlName = questionData['levelNames'][lvl]['name'];

		questionData["login"] = true;

		res.render('question', {
	    	"lockedQuestionText" : questionData['lockedQuestionText'],    	
	    	"questionText" : questionData['questionText'],
	    	"levelName" : lvlName });
	}
	
};