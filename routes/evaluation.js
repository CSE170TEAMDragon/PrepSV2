var questionData = require('../questions.json');

exports.viewEvaluation = function(req, res) {
	var question = req.query.q;
	var name2 = req.query.id;

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

	res.render('evaluation', {
		"questionSelected" : question,
		"id" : name2,
		"levelName" : lvlName
	});
}