var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* NOTE: Data.now() is used as an id field of mongo document
 *
 */
router.FoodSchema = new Schema({
	createdOn: { type: Number, unique: true }
	,email: String
	,price: Number
	,location: {
		lat: Number
		,lng: Number
	}
	,name: String
	,description: String
	,ingredients: String
	,count: { type: Number, min: 0 }
	,availableTimes: [String]
	,img: { data: Buffer, contentType: String }
	,reviews: {
		numofreviews: { type: Number, min: 0 }
		,numofratings: { type: Number, min: 0 }
		,avgrating: { type: Number, min: 0, max: 5 }
		,userReviews: [{
			acctID: String
			,rating: { type: Number, min: 0, max: 5 }
			,reviewtitle: String
			,review: String
		}]
	}
});

router.FoodModel = mongoose.model('foods', router.FoodSchema);

router.get('/', function(req, res) {
	var userdata = {
		login: req.session.login
		,user: req.session.user
	};
  res.render('postyourfood', userdata);
});

router.post('/', function(req, res) {
	var imageURL = req.body.imageURL;
	var matches = imageURL.match(/^data:(.+);base64,(.*)$/);
	var contentType = matches[1];
	var base64_data = matches[2];
	var buffer = new Buffer(base64_data, 'base64');
	var createdOn = Date.now();
	var email = req.session.user.email;
	console.log('price in post: '+req.body.price);
	var data = {
		createdOn: createdOn
		,email: email
 		,price: req.body.price
		,location: {
			lat: req.body.latLng.lat
			,lng: req.body.latLng.lng
		}
		,name: req.body.foodName
		,description: req.body.description
		,ingredients: req.body.ingredients
		,count: req.body.quantity
		,availableTimes: [
			"Tue, Mar. 15th 12:00 ~ 13:00"
			,"Wed, Mar. 16th 12:00 ~ 13:00"
			,"Thu, Mar. 17th 12:00 ~ 13:00"
			,"Fri, Mar. 18th 15:00 ~ 17:00"
		]
		,img: {
			data: base64_data
			,contentType: contentType
		}
		,reviews: {
			numofreviews: 3
			,numofratings: 3
			,avgrating: 4.5
			,userReviews: [
				{
					acctID: 'asdfasdf'
					,rating: 5.0
					,reviewtitle: 'Magnificent!'
					,review: "Proin sit amet ipsum finibus, eleifend purus sit amet, elementum augue. Proin non pulvinar nisi, nec aliquet enim. Fusce non diam ac orci efficitur fringilla tristique nec ex. Donec venenatis dictum nisi eu interdum. Maecenas elementum semper ante eget cursus. Sed a fringilla quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc molestie elit eu est ullamcorper aliquam. Aenean tincidunt dolor sit amet ultricies semper."
				}
				,{
					acctID: 'adfasdf'
					,rating: 4.5
					,reviewtitle: 'Great'
					,review: 'Proin sit amet ipsum finibus, eleifend purus sit amet, elementum augue. Proin non pulvinar nisi, nec aliquet enim. Fusce non diam ac orci efficitur fringilla tristique nec ex. Donec venenatis dictum nisi eu interdum. Maecenas elementum semper ante eget cursus. Sed a fringilla quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc molestie elit eu est ullamcorper aliquam. Aenean tincidunt dolor sit amet ultricies semper.'
				}
				,{
					acctID: 'asdfasdf'
					,rating: 4.0
					,reviewtitle: 'Great for a quick lunch meal'
					,review: 'Proin sit amet ipsum finibus, eleifend purus sit amet, elementum augue. Proin non pulvinar nisi, nec aliquet enim. Fusce non diam ac orci efficitur fringilla tristique nec ex. Donec venenatis dictum nisi eu interdum. Maecenas elementum semper ante eget cursus. Sed a fringilla quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc molestie elit eu est ullamcorper aliquam. Aenean tincidunt dolor sit amet ultricies semper.'
				}
			]
		}
	}; 

	router.uploadFood(data, function(err, mongoose) {
		mongoose.connection.close();
		if (!err) {
			// success
			res.json({ status: "success" });
		} else {
			// failure
			res.json({ status: "failure" });
		}
	});
});

router.uploadFood = function(data, callback) {
	router.connectToDB(function(err, mongoose) {
		if (!err) {
			router.FoodModel.create(data, function(err, fooditem) {
				if (err) {
					console.log("Error uploading the food item: " + err);
					callback(err, mongoose);
				} else {
					console.log("Succeeded in uploading the food item");
					callback(null, mongoose);
				}
			});
		} else {
			callback(err, mongoose);
		}
	});
};

router.connectToDB = function(callback) {
	var dbURL = '54.187.150.45:27017/chefbox';

	mongoose.connect(dbURL, function(err) {
		if (err) {
			console.log("unable to connect to the mongoDB server. Error:", err);
			callback(err, mongoose);
		} else {
			console.log("Connection to DB at "+dbURL+" is established");
			callback(null, mongoose);
		}
	});
};

module.exports = router;
