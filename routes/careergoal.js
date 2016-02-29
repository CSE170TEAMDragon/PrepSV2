var data = require ("../questions.json");

exports.viewCareer = function(req, res) { 
    res.render('careergoal', data);
};