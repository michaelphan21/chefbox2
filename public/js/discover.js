'use strict';

$(document).ready(function() {
	console.log("$(document).read()");
	initializePage();
});

function initializePage() {
	console.log("initializePage()");

	$('.image button').click(function() {
		var foodID = $(this).parent().attr('id');
		var foodInfoURL = "/searchID?id=" + foodID;
		$.get(foodInfoURL, function(data) {
			document.location.href = "foodinfo?idx=" + data;
		});
	});
}