var questionData = require ('../questions.json')
var hisData = require ('../evals.json')


exports.viewAchievement = function(req, res){

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

	while( hisData['answeredQuestion'].length != 0 )
		hisData['answeredQuestion'].pop();


	for( i = 0; i < questionData['questionText'].length; i++) {
		if( questionData['questionText'][i]['answered'] === "1"){
			var json = questionData['questionText'][i];
			hisData['answeredQuestion'].push( json );
		}
	}
	
    res.render('achievement', {
    	"unlockedPoses" : questionData['unlockedPoses'],
    	"answeredQuestion" : hisData['answeredQuestion'],
    	"levelName" : lvlName});
};