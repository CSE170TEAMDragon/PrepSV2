var data = require ("../questions.json");

exports.view = function(req, res) { 
  // controller code goes here 
    res.render('learnmore', data);
};