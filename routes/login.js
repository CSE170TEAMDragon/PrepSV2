var data = require ("../logininfo");

exports.viewProject = function(req, res) { 
	/*var name = req.query.flag;
	if( name === "1")
    	res.render('login');
    else
    	res.json(data);*/
    res.render ('login');
};