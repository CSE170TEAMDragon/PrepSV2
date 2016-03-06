
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var login = require('./routes/login');
var learnmore = require('./routes/learnmore');
var question = require('./routes/question');
var achievement = require('./routes/achievement');
var evalsHistory = require('./routes/evalsHistory');
var evaluation = require('./routes/evaluation');
var feedback = require('./routes/feedback');
var recording = require('./routes/recording');
var careergoal = require('./routes/careergoal');
var careergoal2 = require('./routes/careergoal2');
var PowerPose = require('./routes/1PowerPose');
var ImagineSuccess = require('./routes/2ImagineSuccess');
var AimToConnect = require('./routes/3AimToConnect');
var CalmTheNerves = require('./routes/4CalmTheNerves');
var Research = require('./routes/5Research');
var response = require('./routes/responseHistory');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.viewProject);
app.get('/learnmore', learnmore.view);

app.get('/question', question.viewQuestion);
// post '/question' instead of get due to login form
app.post('/question', question.viewQuestionPost);

app.get('/achievement', achievement.viewAchievement);
app.get('/evalsHistory', evalsHistory.viewHistory);
app.get('/evaluation', evaluation.viewEvaluation);
app.get('/feedback', feedback.viewFeedback);
app.get('/recording', recording.viewRecording);

app.get('/careergoal',careergoal.viewCareer);
app.post('/careergoal2',careergoal2.viewCareer);

app.get('/versionB', index.viewVersionB);
app.get('/1PowerPose', PowerPose.viewBadge1);
app.get('/2ImagineSuccess', ImagineSuccess.viewBadge2);
app.get('/3AimToConnect', AimToConnect.viewBadge3);
app.get('/4CalmTheNerves', CalmTheNerves.viewBadge4);
app.get('/5Research', Research.viewBadge5);

app.post('/historyAdd', evalsHistory.addHistory);
app.get('/responseHistory', response.viewHistory);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
