var data = require("../evals.json");
var questionData = require ("../questions.json");

exports.viewHistory = function(req, res) { 
	var id = req.query.id;
	var pos;
	for( i = 0; i < data['answeredQuestion'].length; i++){
		var name = data['answeredQuestion'][i]['id'];
		if( name === id)
			pos = i;
	}
	var q = data['answeredQuestion'][pos]['question'];

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

    res.render('evalshistory', {
    	"data" : data['history'],
    	"levelName" : lvlName,
    	"question" : q
    });
};