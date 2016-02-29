var questionData = require('../questions.json');
var evaluationCriteria = require('../evaluation.json');
var info = require('../logininfo.json');

exports.viewEvaluation = function(req, res) {
	var question = req.query.q;
	var name2 = req.query.id;
	var curUserIdx = info['curUserIdx'];

	var lvl = parseInt(questionData['user'][curUserIdx]['level']);
	var lvlName = questionData['user'][curUserIdx]['levelNames'][lvl]['name'];
	var nEvals = evaluationCriteria[name2].eval.length;
	var evalText = evaluationCriteria[name2].eval;

	res.render('evaluation', {
		"questionSelected" : question,
		"id" : name2,
		"levelName" : lvlName,
		"evalBox" : evalText,
	});
};