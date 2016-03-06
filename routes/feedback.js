var info = require('../logininfo.json');
var questionData = require('../questions.json');

exports.viewFeedback = function(req, res) {

	var question = req.query.q;
	var name2 = req.query.id;
	var curUserIdx = info['curUserIdx'];

	var lvl = parseInt(questionData['user'][curUserIdx]['level']);
	var lvlName = questionData['user'][curUserIdx]['levelNames'][lvl]['name'];
	var id = parseInt (name2);
	var feedback = questionData['user'][curUserIdx]['questionText'][id]['notes'];


	if( question != undefined && name2 != undefined && curUserIdx != -1)
		questionData['user'][curUserIdx]['questionText'][name2]['answered'] = true;

	res.render('feedback', {
		'originalQuestion': question,
		'id' : name2,
		'levelName' : lvlName,
		'Notes' : feedback
	});
};