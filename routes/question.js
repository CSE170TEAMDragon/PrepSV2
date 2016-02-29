var questionData = require('../questions.json');
var hisData = require('../evals.json');
var info = require('../logininfo.json');

exports.viewQuestion = function(req, res) {	
	if( info['logininfo'] == undefined) {
		var login = req.query.login;
		var register = req.query.register;
		var username1 = req.query.username1;
		var password1 = req.query.password1;
		var username2 = req.query.username2;
		var password2 = req.query.password2;
		var password3 = req.query.password3;
		info['logininfo'] = {
			'login' : login,
			'register' : register,
			'username1' : username1,
			'username2' : username2,
			'password1' : password1,
			'password2' : password2,
			'password3' : password3,
		}
		info['alreadyLoggedIn'] = true;
	}


	var name = req.query.q;
	var name2 = req.query.id;
	var errorStr = "";

	var loginFlag= false;
	var registerFlag= false;
	var normalFlag = false;

	var loginErr = false;
	var registerErr = false;

	var levelUp = false;

	var curUserIdx = info['curUserIdx'];

	if( name != undefined && name2 != undefined && curUserIdx != -1){
		var numAns = 0;
		normalFlag= true;
		name2 = parseInt(name2);
		questionData['user'][curUserIdx]['questionText'][name2]['answered'] = true;

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
	}

	else{
		if( info['alreadyLoggedIn'] == true ) {
			var login = info['logininfo']['login'];
			var register = info['logininfo']['register'];
			info['alreadyLoggedIn'] = false;
		}
		else{
			var login = undefined;
			var register = undefined;
		}

		if( login != undefined ){
			var username = info['logininfo']['username1'];
			var password = info['logininfo']['password1'];
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

		else if ( register != undefined ){
			// passwords are not yet encrypted
			var username = info['logininfo']['username2'];
			var password = info['logininfo']['password2'];
			var password2 = info['logininfo']['password3'];

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
						"password" : password,
						"userIdx"  : info['newUserIdx']
					};
					info['logintable'].push(newMem);
					info['curUserIdx'] = info['newUserIdx'];
					curUserIdx = info['curUserIdx'];
					info['newUserIdx'] = info['newUserIdx'] + 1;
					var json = questionData['questionTemp'];
					var newObject = JSON.parse(JSON.stringify( json ));
					questionData['user'].push(newObject);
					registerFlag = true;
			}
			
		}
	}

	if( loginErr || registerErr){
		res.redirect("/login?error=true&errorStr="+errorStr);
	}
	else {
		var lvl = parseInt(questionData['user'][curUserIdx]['level']);
		var lvlName = questionData['user'][curUserIdx]['levelNames'][lvl]['name'];

		questionData['user'][curUserIdx]["login"] = true;

		res.render('question', {
	    	"lockedQuestionText" : questionData['user'][curUserIdx]['lockedQuestionText'],    	
	    	"questionText" : questionData['user'][curUserIdx]['questionText'],
	    	"levelName" : lvlName,
	    	"levelUp" : levelUp
	    });
	}
	
};