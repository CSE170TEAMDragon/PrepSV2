var questionData = require ('../questions.json')
var hisData = require ('../evals.json')


exports.viewAchievement = function(req, res){

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

    res.render('achievement', {
    	"unlockedPoses" : questionData['unlockedPoses'],
    	"answeredQuestion" : hisData['answeredQuestion'],
    	"levelName" : lvlName});
};