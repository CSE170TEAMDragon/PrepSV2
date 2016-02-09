var data = require("../questions.json");

exports.viewRecording = function(req, res){
	res.render('recording', data);
	//var question = req.params.question;

	// res.render('recording', question);
};