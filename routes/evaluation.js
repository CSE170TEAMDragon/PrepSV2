var questionData = require('../questions.json');
var evaluationCriteria = require('../evaluation.json');

exports.viewEvaluation = function(req, res) {
	var question = req.query.q;
	var name2 = req.query.id;

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];
	var nEvals = evaluationCriteria[name2].eval.length;
	var evalText = evaluationCriteria[name2].eval;

	res.render('evaluation', {
		"questionSelected" : question,
		"id" : name2,
		"levelName" : lvlName,
		"evalBox" : evalText,
	});
};