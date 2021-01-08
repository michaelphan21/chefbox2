var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var data = require('../data.json');

router.get('/', function(req, res) {
	var userdata = {
		login: req.session.login,
		data: data,
		user: req.session.user
	};
  res.render('discover', userdata);
});

module.exports = router;
