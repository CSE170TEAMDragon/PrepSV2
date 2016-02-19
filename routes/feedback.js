var questionData = require('../questions.json');

exports.viewFeedback = function(req, res) {
	var question = req.query.q;
	var name2 = req.query.id;

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];
	var feedback = questionData['questionText'][name2]['notes'];
	console.log(feedback);

	res.render('feedback', {
		'originalQuestion': question,
		'id' : name2,
		'levelName' : lvlName,
		'Notes' : feedback
	});
}