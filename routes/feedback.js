
exports.viewFeedback = function(req, res) {
	var question = req.params.feedback;
	res.render('feedback', {
		'originalQuestion': question
			});
}