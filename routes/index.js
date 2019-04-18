
var app = require('express')();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.jade');
});


var express = require('express');
var router = express.Router();

// get to the home page (after login)
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
