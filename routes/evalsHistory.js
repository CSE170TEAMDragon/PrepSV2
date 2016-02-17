var data = require("../evals.json");
var questionData = require ("../questions.json");

exports.viewHistory = function(req, res) { 
	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

    res.render('evalshistory', {
    	"data" : data['history'],
    	"levelName" : lvlName});
};