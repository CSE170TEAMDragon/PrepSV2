var questionData = require('../questions.json');
var hisData = require('../evals.json');
var info = require('../logininfo.json');

exports.viewCareer = function(req, res) { 
    var register = req.body.register;
	var errorStr = "";

	var registerFlag= false;
	var registerErr = false;

	if ( register != undefined ){
			// passwords are not yet encrypted
			var username = req.body.username2;
			var password = req.body.password2;
			var password2 = req.body.password3;

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
					info['newUserIdx'] = info['newUserIdx'] + 1;
					var json = questionData['questionTemp'];
					var newObject = JSON.parse(JSON.stringify( json ));
					questionData['user'].push(newObject);
					registerFlag = true;
			}
			
		}	

	if(registerErr && info['curUserIdx'] == -1){
		res.redirect("/login?error=true&errorStr="+errorStr);
	}
	else
    	res.render('careergoal2', questionData);
};