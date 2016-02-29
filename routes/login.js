var info = require('../logininfo.json');

exports.viewProject = function(req, res) { 
	var error = req.query.error;
	var errorStr = req.query.errorStr;

	if( error == undefined)
    	res.render ('login');
    else{
    	var flag = true;
    	res.render ('login', {
    		"errorMsg" : flag,
    		"errorStr" : errorStr
     	});
    }
};