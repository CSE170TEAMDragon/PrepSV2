var info = require('../logininfo.json');
var questionData = require('../questions.json');

exports.viewRecording = function(req, res){
	var name = req.query.q;
	var name2 = req.query.id;
	var curUserIdx = info['curUserIdx'];

	var lvl = parseInt(questionData['user'][curUserIdx]['level']);
	var lvlName = questionData['user'][curUserIdx]['levelNames'][lvl]['name'];

	res.render('recording', {
		'questionChosen': name,
		'id' : name2,
		'levelName' : lvlName
	});
};