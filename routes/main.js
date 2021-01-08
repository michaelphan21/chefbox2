//var data = require('../data.json');
var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res) {
	var userdata = {
		login: req.session.login,
		user: req.session.user
	};
  res.render('main', userdata);
});

router.get('/main', function(req, res) {
	var userdata = {
		login: req.session.login,
		user: req.session.user
	};
  res.render('main', userdata);
});

module.exports = router;
