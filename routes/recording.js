var questionData = require('../questions.json');

exports.viewRecording = function(req, res){
	var name = req.query.q;
	var name2 = req.query.id;

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

	res.render('recording', {
		'questionChosen': name,
		'id' : name2,
		'levelName' : lvlName
	});
};