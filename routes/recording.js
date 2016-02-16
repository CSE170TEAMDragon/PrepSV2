exports.viewRecording = function(req, res){
	var name = req.params.name;

	res.render('recording', {
		'questionChosen': name
	});
};