var info = require('../logininfo.json');
var questionData = require ("../questions.json");

exports.view = function(req, res) { 
	var login = true;
	if( info['curUserIdx'] == -1)
		login = false;

    res.render('learnmore', {
    	"login" : login
    });
};