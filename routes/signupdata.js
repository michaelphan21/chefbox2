var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

router.sendData = function(req, res) {
	var username = req.query.username;
	var email = req.query.email;
	var data = {
		"username": username,
		"email": email,
	};
	res.json(data);
};

module.exports = router;
