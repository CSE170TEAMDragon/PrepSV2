var questionData = require('../questions.json');
var hisData = require('../evals.json');
var info = require('../logininfo.json');

exports.viewCareer = function(req, res) { 
    res.render('careergoal2', questionData);   
};