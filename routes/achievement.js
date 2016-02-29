var questionData = require ('../questions.json')
var hisData = require ('../evals.json')
var info = require('../logininfo.json');


exports.viewAchievement = function(req, res){
	var curUserIdx = info['curUserIdx'];

	var lvl = parseInt(questionData['user'][curUserIdx]['level']);
	var lvlName = questionData['user'][curUserIdx]['levelNames'][lvl]['name'];

	while( hisData['answeredQuestion'].length != 0 )
		hisData['answeredQuestion'].pop();


	for( i = 0; i < questionData['user'][curUserIdx]['questionText'].length; i++) {
		if( questionData['user'][curUserIdx]['questionText'][i]['answered'] === true){
			var json = questionData['user'][curUserIdx]['questionText'][i];
			hisData['answeredQuestion'].push( json );
		}
	}
	
    res.render('achievement', {
    	"unlockedPoses" : questionData['user'][curUserIdx]['unlockedPoses'],
    	"answeredQuestion" : hisData['answeredQuestion'],
    	"levelName" : lvlName});
};