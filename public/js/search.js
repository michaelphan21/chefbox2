'use strict';

var SearchModalController = {

	docLengthElementName: 'len'
	,TemplateLatElementName: 'lat'
	,TemplateLngElementName: 'lng'
	,createdOnIdElementName: 'createdOnId'
	,TemplateViewBtnElementName: 'viewbtn'

	,docLen: null
	,lat: null
	,lng: null
	,createdOnIdArray: null
	,viewBtns: null

	,findElements: function() {
		var base = this;

		base.docLen = parseInt(document.getElementById(base.docLengthElementName).value);

		base.createdOnIdArray = [];
		base.viewBtns = [];
		for (var i = 0; i < base.docLen; ++i) {
			base.createdOnIdArray.push(document.getElementById(base.createdOnIdElementName+i).value);
			base.viewBtns.push(document.getElementById(base.TemplateViewBtnElementName+i));
		}

		return base;
	}

	,addClickEvents: function() {
		var base = this;

		base.viewBtns.map(function(viewBtn, i) {
			viewBtn.onclick = function(e) {
				e.preventDefault();
				var foodInfoURL = "/foodinfo?id=" + base.createdOnIdArray[i];
				document.location.href = foodInfoURL;		
			};
		});

		return base;
	}

	,initialize: function() {
		var base = this;
		return base.findElements().addClickEvents();
	}
};

var SearchModalController = SearchModalController || {};

$(document).ready(function() {
	SearchModalController.initialize();
});