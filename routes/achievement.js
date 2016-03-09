var questionData = require ('../questions.json')
var hisData = require ('../evals.json')
var info = require('../logininfo.json');


exports.viewAchievement = function(req, res){
	var curUserIdx = info['curUserIdx'];

	var lvl = parseInt(questionData['user'][curUserIdx]['level']);
	var lvlName = questionData['user'][curUserIdx]['levelNames'][lvl]['name'];
	
	if (req.query.cancelClicked == undefined ){
		var input1 = req.query.inputDefault1;
		var input2 = req.query.inputDefault2;
		if( input1 != undefined && input1.length != 0 )
			questionData['user'][curUserIdx]['careerPosition'] = input1;
		if ( input2 != undefined && input2.length != 0 )	
			questionData['user'][curUserIdx]['careerCompany'] = input2;
	}

    res.render('achievement', {
    	"unlockedPoses" : questionData['user'][curUserIdx]['unlockedPoses'],
    	"answeredQuestion" : hisData['answeredQuestion'],
    	"levelName" : lvlName,
    	"position" : questionData['user'][curUserIdx]["careerPosition"],
    	"company" : questionData['user'][curUserIdx]["careerCompany"]
    });
};