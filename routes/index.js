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

    res.render('index', {
      "versionB" : false
    });

};


exports.viewVersionB = function(req, res){
  var curUserIdx = info['curUserIdx'];

  if( info['curUserIdx'] != -1 ){
    questionData['user'][curUserIdx]["login"] = false;
    info['curUserIdx'] = -1;
  }

  res.render('index', {
    "versionB" : true
  });
  
};
