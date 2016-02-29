var questionData = require ("../questions.json");
var info = require("../logininfo.json");

exports.viewCareer = function(req, res) { 
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
    res.render('careergoal', questionData);
};