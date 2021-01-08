var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var postyourfood = require('./postyourfood');

router.get('/', function(req, res) {
	var user = req.session.user;
	var login = req.session.login;
  router.retrieveAll(user, login, function(err, mongoose, data) {
  	mongoose.connection.close();
		res.render('search', data);
  });
});

router.retrieveAll = function(user, login, callback) {
	postyourfood.connectToDB(function(err, mongoose) {
		if (!err) {
			postyourfood.FoodModel.find({}, function(err, docs) {
				if (!err) {
					console.log("Succeeded in retrieving the docs");
					callback(err, mongoose, { user: user, login: login, docs: docs });
				} else {
					console.log("Error in retrieving the docs");
					callback(err, mongoose, {});
				}
			});
		}
	});
};

module.exports = router;
