var data = require("../evals.json");

exports.viewHistory = function(req, res) { 
  // controller code goes here 
    res.render('evalshistory', data);
};