'use strict';

var FoodinfoModalController = {
	availableTimeRowElementName: 'select-row'
	,availableTimeRowImgElementName: 'select-row-img'
	,selectBtnElementName: 'selectBtn'
	,confirmBtnElementName: 'confirm-btn'
	,messageBtnElementName: 'message-btn'
	,numOfAvailableTimesElementName: 'numOfAvailableTimes'
	,createdOnElementName: 'createdOn'
	,emailElementName: 'email'

	,availableTimeRows: null
	,availableTimeRowImgs: null
	,availableTimeChoice: null
	,selectBtns: null
	,confirmBtn: null
	,messageBtn: null
	,numOfAvailableTimes: null
	,createdOn: null
	,email: null

	,findElements: function() {
		var base = this;

		base.confirmBtn = document.getElementById(base.confirmBtnElementName);
		base.messageBtn = document.getElementById(base.messageBtnElementName);
		base.numOfAvailableTimes = parseInt(document.getElementById(base.numOfAvailableTimesElementName).value);
		base.selectBtns = [];
		base.availableTimeRows = [];
		base.availableTimeRowImgs = [];
		for (var i = 0; i < base.numOfAvailableTimes; ++i) {
			base.selectBtns.push(document.getElementById(base.selectBtnElementName+i));
			base.availableTimeRows.push(document.getElementById(base.availableTimeRowElementName+i));
			base.availableTimeRowImgs.push(document.getElementById(base.availableTimeRowImgElementName+i));
		}
		base.createdOn = document.getElementById(base.createdOnElementName).value;
		base.email = document.getElementById(base.emailElementName).value;

		return base;
	}

	,addClickEvents: function() {
		console.log('addClickEvents');
		var base = this;

		base.selectBtns.map(function(selectBtn, i) {
			selectBtn.onclick = function(e) {
				e.preventDefault();
				base.selectBtns.map(function(otherSelectBtn, j) {
					base.availableTimeRows[j].style.fontWeight = 'normal';
					base.availableTimeRowImgs[j].src = "";
					otherSelectBtn.disabled = false;
				});
				base.availableTimeChoice = base.availableTimeRows[i].textContent;
				console.log('base.availableTimeChoice: ' + base.availableTimeChoice);
				base.availableTimeRows[i].style.fontWeight = 'bold';
				base.availableTimeRowImgs[i].src = "images/right-arrow-circular.png";
				selectBtn.disabled = true;
			};
		});

		base.confirmBtn.onclick = function(e) {
			e.preventDefault();
			if (!base.availableTimeChoice) {
				alert("Please select a time that you'd like to pick up the food");
			} else {
				alert("Great! Your order has been successfully placed for "
					+ base.availableTimeChoice
					+ " and we will inform you on the day you're supposed to pick it up.");
			}
			document.location.href = 'foodinfo?id=' + base.createdOn;
		};

		base.messageBtn.onclick = function(e) {
			e.preventDefault();
			document.location.href = 'message?email=' + base.email;
		};

		return base;
	}

	,initialize: function() {
		var base = this;
		return base.findElements().addClickEvents();
	}
};

var FoodinfoModalController = FoodinfoModalController || {};

$(document).ready(function() {
	FoodinfoModalController.initialize();
});