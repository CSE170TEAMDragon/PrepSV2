var data = require ("../questions.json");

exports.view = function(req, res) { 
    res.render('learnmore', data);
};