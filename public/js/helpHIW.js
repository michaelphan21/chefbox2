'use strict';

$(document).ready(function() {
	console.log("document ready");
	initializePage();
});

function initializePage() {
	console.log("initializePage");
	$('#help1').click(function (e) {
		ga('send', 'event', 'viewed_the_help_menu', 'click');
		ga('send','event','viewed_the_first_help_menu','click');
		e.preventDefault();
		console.log('help1 clicked');
		var htmlTxt = '<h3 style="text-align:center; color:#666666">Getting Started</h3>'
		htmlTxt += '&nbsp;&nbsp;ChefBox is a great way to navigate around your community and try different kind of cultural foods made by peers near you! To get started, click on one of the tabs above to learn more!';				
		htmlTxt += '<br><br>';
		$('#summary').html(htmlTxt);
	});
	$('#help2').click(function (e) {
		e.preventDefault();
		ga('send', 'event', 'viewed_the_help_menu', 'click');
		ga('send','event','viewed_the_second_help_menu','click');
/*
		var htmlTxt = '<h1>&nbsp;FAQ</h1>'
		htmlTxt += '<p style="margin: 0 15px 0 15px; text-align: justify;">&nbsp;Lobortis arcu eu diam  Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.</p>';
		htmlTxt += '<br>';
		htmlTxt += '<p style="margin: 0 15px 0 15px; text-align: justify;">&nbsp;Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.Fusce lobortis arcu eu diam ullamcorper, quis rutrum sapien sollicitudin. Nam felis diam, efficitur sed leo id, consequat lobortis mauris. Nam id fermentum magna. In hac habitasse platea dictumst. Cras eget est fermentum, cursus ligula ut, tristique ligula. Pellentesque rutrum accumsan dignissim. Fusce porttitor lorem orci, sit amet maximus eros sagittis ultrices. Duis porta, nunc a interdum viverra, lorem odio volutpat quam, id feugiat tortor ipsum ut Mauris orci neque, venenatis a turpis a, viverra sodales ex. Nulla sit amet auctor neque. Quisque maximus porttitor purus, eu efficitur sapien vehicula quis. Praesent facilisis eu nunc et ultrices.</p>';
*/		
		var htmlTxt = '<h3 style="text-align:center; color:#666666">Account and Profile</h3>'
		htmlTxt += '&nbsp;For ChefBox, you do not need an account to browse the plethora amount of dishes available. An account will only be necessary if you want to make an order or contact the chef directly.'; 
        htmlTxt += '<br><br>';
        htmlTxt += '<h3 style="text-align:center; color:#666666">How do you register for a new account/login?</h3>';
   		htmlTxt += 'If you would like to register a new account, please click "Sign Up" at the very top of this page. If you would like to log into an existing account, please click "Log In" at the very top of the page.';
   		htmlTxt += '<br><br>';
        htmlTxt += '<h3>What is the difference between a chef account and a regular account?</h3>';
        htmlTxt += 'There are the two different types of account, a Chef account and a regular account. Click on "Becoming a Chef" to learn more on how to become one.';
   		$('#summary').html(htmlTxt);
	});
	$('#help3').click(function (e) {
		e.preventDefault();
		ga('send', 'event', 'viewed_the_help_menu', 'click');
		ga('send','event','viewed_the_third_help_menu','click');
		var htmlTxt = '<h3 style="text-align:center; color:#666666">How to Become a Chef</h3>'
		htmlTxt += 'Becoming a chef comes with great responsibilities. ';
		htmlTxt += '<br><br>';
		htmlTxt += 'In order to be promoted to a trusted chef amongst your community, you need to gain a trust worthy amount of reviews from your peer and you must meet the required rating. These ratings are a compilation of your customers/those who have purchased your food! Make sure you treat them with the highest standard and with regards to ethic in order to keep up a good reputation. After you have met the criterias, you can request to upgrade your account to Chef standing. We will take a look at your reviews in the process and will get back to you if you qualify.';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3>What are the benefits of becoming a Chef?</h3>'
		htmlTxt += 'One, being promoted to chef standing already says a lot. It shows that you have great service and and a tasty meal to provide to the community. Second, for those who are inspired to become a chef, this can help those who want to potentially start up their own business. Not only do you gain the trust of your customers and friends, but you can become highly reputable as well. We hope that becoming a chef can potentially help lead you to move on to bigger things. There are limitless amount of opportunities, it is up to you on how you shape those benefits.';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3>Do I have to pay to upgrade my account?</h3>'
		htmlTxt += 'Nope! ChefBox is free of charge!'
		htmlTxt += '<br><br>';
		htmlTxt += '<h3>Can I pay to upgrade my account?</h3>'
		htmlTxt += 'We believe that it is up to the community to decide whether or not you will be able to upgrade your account. Again, ChefBox is free of charge. In addition, we believe in being transparent and honest to others about what you have to offer. With that said, paying to upgrade your account is not a viable option.';
		$('#summary').html(htmlTxt);

	});
	$('#help4').click(function (e) {
		e.preventDefault();
		ga('send', 'event', 'viewed_the_help_menu', 'click');
		ga('send','event','viewed_the_fourth_help_menu','click');
		var htmlTxt = '<h3 style="text-align:center; color:#666666">Reviews</h3>'
		htmlTxt += 'Reviews can be one of the biggest influences and can say a lot about your business. A majority of consumers rely on reviews to be a factor in making their final purchase decisions.';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3 style="text-align:center; color:#666666">How do I leave a review?</h3>';
		htmlTxt += 'To leave reviews, you will need to create an account. Next, you would have to purchase one of ' + "chef's" + ' dishes. He/she will confirm that you have made the purchase and give you the option of leaving a review by completeing the transaction. Lastly, after you are done chowing down, you can leave a nice or a mean review about the ' + "chef's" + ' entree! In this case, you are given two options; you are allowed to leave a rated review and also a comment describing how your experience was with the chef and your food.' ;
		$('#summary').html(htmlTxt);

	});
	$('#help5').click(function (e) {
		e.preventDefault();
		ga('send', 'event', 'viewed_the_help_menu', 'click');
		ga('send','event','viewed_the_fifth_help_menu','click');
		var htmlTxt = '<h3 style="text-align:center; color:#666666">Policies</h3>'
		htmlTxt += 'It is difficult to regulate any unlawfully doing by one another since all transaction and deals are done in person. All that we ask of the community is to be truthful and transparent to others around you! Otherwise, if you obtain a necessary amount of reports from the community, you will be permanently banned from the ChefBox.';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3 style="text-align:center; color:#666666">How do I report someone who is being unethical or doing something unlawful?</h3>';
		htmlTxt += 'There will be a report option at the very top of their profile when you look into more details about the entree. You must hit report and you will be asked a series of question and in the end, you will be given room to express your concerns. There will be a "1,2,3, strike" depending on the severity of issue. If the action of is persistent, it can lead to a permanent ban from ChefBox. Please be nice!.';
		$('#summary').html(htmlTxt);

	});
	$('#help6').click(function (e) {
		e.preventDefault();
		ga('send', 'event', 'viewed_the_help_menu', 'click');
		ga('send','event','viewed_the_sixth_help_menu','click');
		var htmlTxt = '<h3 style="text-align:center; color:#666666">FAQ</h3>'
		htmlTxt += '<h3 style="text-align:center; color:#666666">How do I make a purchase?</h3>';
		htmlTxt += 'blah blah blah';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3 style="text-align:center; color:#666666">How can I view my purchase history?</h3>';
		htmlTxt += 'blah blah blah';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3 style="text-align:center; color:#666666">What if I accidentally ________?</h3>';
		htmlTxt += 'blah blah blah';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3 style="text-align:center; color:#666666">Can I do ______________?</h3>';
		htmlTxt += 'blah blah blah';
		htmlTxt += '<br><br>';
		htmlTxt += '<h3 style="text-align:center; color:#666666">Is there a health requirement on _________?</h3>';
		htmlTxt += 'blah blah blah';
		$('#summary').html(htmlTxt);
	});
}