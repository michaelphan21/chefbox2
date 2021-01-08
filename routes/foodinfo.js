var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var postyourfood = require('./postyourfood');

router.get('/', function(req, res) {
	var user = req.session.user;
	var login = req.session.login;
	var id = parseInt(req.query.id);
	router.findItem(user, login, id, function(err, mongoose, data) {
		mongoose.connection.close();
		res.render('foodinfo', data);
	});
});

router.findItem = function(user, login, id, callback) {
	postyourfood.connectToDB(function(err, mongoose) {
		if (!err) {
			postyourfood.FoodModel.findOne({ createdOn: id }, function(err, doc) {
				if (!err) {
					console.log("Succeeded in finding the doc");
					callback(err, mongoose, { user: user, login: login, doc: doc });
				} else {
					console.log("Error in finding the doc");
					callback(err, mongoose, {});
				}
			});
		}
	});
};

module.exports = router;