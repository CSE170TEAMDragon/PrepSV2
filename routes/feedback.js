var questionData = require('../questions.json');

exports.viewFeedback = function(req, res) {
	var question = req.query.q;
	var name2 = req.query.id;

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

	res.render('feedback', {
		'originalQuestion': question,
		'id' : name2,
		'levelName' : lvlName
	});
}