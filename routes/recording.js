exports.viewRecording = function(req, res){
	var name = req.params.name;
	console.log("The chosen question is:  " + name + " ' ");
	res.render('recording', {
		'questionChosen':name
	});
};