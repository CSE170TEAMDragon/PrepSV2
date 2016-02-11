var questionData = require('../questions.json');


exports.viewQuestion = function(req, res) {
	console.log("Navigating to questions page (added change)");
	res.render('question', questionData);
};