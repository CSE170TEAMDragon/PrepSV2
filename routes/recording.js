exports.viewRecording = function(req, res){
	var name = req.query.q;

	res.render('recording', {
		'questionChosen': name
	});
};