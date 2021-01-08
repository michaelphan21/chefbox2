var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var app = express();
var http = require('http').Server(app);

var transporter = nodemailer.createTransport('smtps://a1235dlw2kd225dswd%40gmail.com:gustnrkd-1@smtp.gmail.com');


router.get('/', function(req, res) {
	var userdata = {
		user: req.session.user,
		login: req.session.login
	};
  res.render('contactus', userdata);
});

router.get('/mail', function(req, res) {
	console.log('GET /contactus/mail');
	var user_email = req.query.email;
	var user_name = req.query.name;
	var message = req.query.message

	var mailOptions = {
		from: 'a1235dlw2kd225dswd@gmail.com'
		,to: 'a1235dlw2kd225dswd@gmail.com'
		,subject: ''
		,text: 'sender: '+user_email+'\nuser name: '+_user_name+'\nmessage: '+message
	};

	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			return console.log(err);
		}
		console.log('Message sent: '+info.response);
	});
});



module.exports = router;
