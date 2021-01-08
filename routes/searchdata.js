var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var data = require('../data.json');

router.sendIndex = function(req, res) {
	var foodID = req.query.id;
	var foodIdx = 0;
	var len = data.fooditems.length;
	for (i = 0; i < len; ++i) {
		if (foodID == data.fooditems[i].id) {
			foodIdx = i;
		}
	}
	res.json(foodIdx);
}

router.sendData = function(req, res) {
	var foodID = req.query.id;
	var foodIdx = 0;
	var len = data.fooditems.length;
	for (i = 0; i < len; ++i) {
		if (foodID == data.fooditems[i].id) {
			foodIdx = i;
		}
	}
	res.json(data.fooditems[foodIdx]);
}


module.exports = router;
