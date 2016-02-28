var questionData = require ("../questions.json");
var info = require ("../logininfo.json");

/*
 * GET home page.
 */

exports.view = function(req, res){
  var curUserIdx = info['curUserIdx'];

  if( info['curUserIdx'] != -1 ){
    questionData['user'][curUserIdx]["login"] = false;
    info['curUserIdx'] = -1;
  }

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
  var curUserIdx = info['curUserIdx'];

  if( info['curUserIdx'] != -1 ){
    questionData['user'][curUserIdx]["login"] = false;
    info['curUserIdx'] = -1;
  }
    res.render('indexB');
};
