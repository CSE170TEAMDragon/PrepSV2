
exports.viewQuestion = function(req, res) {
	console.log("Navigating to questions page (added change)");
	res.render('question', {
		'questionText': [
		 { 	'question': 'Tell me about yourself and your interests',
			'id': 'question1'
		},
		{ 	'question': 'What are your experiences in your field?',
			'id': 'question2'
		},

		],

		'lockedQuestionText':[
		{ 	'question': 'Describe one project you played a significant role in',
			'id': 'question3'
		},
		{ 	'question': 'What is one setback in your past project? How did you overcome it?',
			'id': 'question4'
		},
		{ 	'question': 'How many golfballs can fit in a school bus?',
			'id': 'question5'
		},
		]

		
	});
};