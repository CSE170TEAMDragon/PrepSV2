var data = require ("../questions.json");
/*
 * GET home page.
 */

exports.view = function(req, res){
  data["login"] = false;
  res.render('index');

  /*var random_num = Math.random();

  if (random_num > 0.5) {
    res.render('index');
  } 
  else {
    res.redirect('/versionB');
  }*/

};

exports.viewVersionB = function(req, res){
	data["login"] = false;
    res.render('indexB');
};
