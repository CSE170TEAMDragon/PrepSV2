
exports.viewFeedback = function(req, res) {
	console.log("Navigating to feedback page");
	var question = req.params.feedback;
	res.render('feedback', {
		'originalQuestion': question
			});
}