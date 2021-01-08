var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.get('/', function(req, res) {
	var userdata = {
		login: req.session.login,
		user: req.session.user
	};
  res.render('helpHIW', userdata);
});

module.exports = router;
