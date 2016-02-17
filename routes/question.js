var questionData = require('../questions.json');
var hisData = require('../evals.json');


exports.viewQuestion = function(req, res) {

	var name = req.query.q;
	var name2 = req.query.id;
	var numAns = 0;

	if( name2 != undefined){
		name2 = parseInt(name2);
		questionData['questionText'][name2]['answered'] = "1";;
	}

	for( x = 0; x < hisData['answeredQuestion'].length; x++ )
		hisData['answeredQuestion'].pop();

	for( i = 0; i < questionData['questionText'].length; i++) {
		if( questionData['questionText'][i]['answered'] === "1"){
			var json = questionData['questionText'][i];
			hisData['answeredQuestion'].push( json );
			numAns= numAns + 1;
		}
	}

	if( name !== "empty") {
		if( questionData['lockedQuestionText'].length >= 2 && numAns == questionData['questionText'].length){

			console.log( "Congrats! You have unlocked two additional interview questions. Keep it up!");
			console.log( "Congrats! You have earned an additional BADGE and LEVELED UP. Keep it up!");

			var json = questionData['lockedQuestionText'].pop();
			questionData["questionText"].push(json);

			json = questionData['lockedQuestionText'].pop();
			questionData["questionText"].push(json);

			json = questionData['lockedPoses'].pop();
			questionData["unlockedPoses"].push(json);

			var level = parseInt(questionData["level"]) + 1;
			questionData["level"] = "" + level;

		}
	}

	var lvl = parseInt(questionData['level']);
	var lvlName = questionData['levelNames'][lvl]['name'];

	res.render('question', {
    	"lockedQuestionText" : questionData['lockedQuestionText'],    	
    	"questionText" : questionData['questionText'],
    	"levelName" : lvlName });
};