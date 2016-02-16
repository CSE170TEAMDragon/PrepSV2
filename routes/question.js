var questionData = require('../questions.json');


exports.viewQuestion = function(req, res) {

	if( questionData['lockedQuestionText'].length != 0){
		var json = questionData['lockedQuestionText'].pop();
		questionData["questionText"].push(json);
	}

	res.render('question', questionData);
};