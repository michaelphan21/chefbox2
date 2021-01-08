var PostModalController = {
	postInputFoodnameElementName: "#foodName",
	postInputQuantityElementName: "#quantity",
	postInputIngredientElementName: "#ingredient",
	postInputDescriptionElementName: "#description",
	postInputUpperPriceElementName: "#upperPrice",
	postInputLowerPriceElementName: "#lowerPrice",
	postBtnElementName: "#postBtn",
	clearBtnElementName: "#clearBtn",
	postInputAvailableTimesElementName: "#availableTimes",
	postInputLatElementName: "#lat",
	postInputLngElementName: "#lng",
	postInputImageElementName: "#camera",

	postInputFoodname: null,
	postInputQuantity: null,
	postInputIngredient: null,
	postInputDescription: null,
	postInputUpperPrice: null,
	postInputLowerPrice: null,
	postInputAvailableTimes: null,
	postInputLat: null,
	postInputLng: null,
	postInputImage: null,

	postBtn: null,
	clearBtn: null,

	imageDataURL: null,

	clearFields: function(base) {
		base.postInputFoodname.val("");
		base.postInputQuantity.val("");
		base.postInputIngredient.val("");
		base.postInputDescription.val("");
		base.postInputUpperPrice.val("");
		base.postInputLowerPrice.val("");
	},

	finishPost: function(base) {
		base.clearFields(base);
		alert("Your food was posted!");
	},

	findElements: function() {
		var base = this;

		base.postInputFoodname = $(base.postInputFoodnameElementName);
		base.postInputQuantity = $(base.postInputQuantityElementName);
		base.postInputIngredient = $(base.postInputIngredientElementName);
		base.postInputDescription = $(base.postInputDescriptionElementName);
		base.postInputUpperPrice = $(base.postInputUpperPriceElementName);
		base.postInputLowerPrice = $(base.postInputLowerPriceElementName);
		base.postInputAvailableTimes = $(base.postInputAvailableTimesElementName);
		base.postInputLat = $(base.postInputLatElementName);
		base.postInputLng = $(base.postInputLngElementName);
		base.postInputImage = $(base.postInputImageElementName);
		base.postBtn = $(base.postBtnElementName);
		base.clearBtn = $(base.clearBtnElementName);

		return base;
	},

	addEvents: function() {
		var base = this;

		base.postInputImage.on('change', function(e) {
			if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
				alert("This browser does not fully support the file APIs and therefore, we failed to load the image. :( Please try other browsers, such as Google Chrome.");
				return ;
			}

			var fr = new FileReader();
			var imageFiles = e.target.files;

      fr.addEventListener("load", function(e){
        var pic = e.target;
        base.imageDataURL = pic.result;    
      });
			fr.readAsDataURL(imageFiles[0]);
		});

		base.postBtn.on("click", function(e) {
			e.preventDefault();
			if (!base.imageDataURL) {
				alert("Please choose an image file to upload");
			} else {
				console.log('postBtn click');
				var postURL = '/postyourfood';
				var price = parseFloat(base.postInputUpperPrice.val());
				var lowerPrice = parseFloat(1+base.postInputLowerPrice.val());
				if (lowerPrice > 99) {
					lowerPrice = lowerPrice / 100;
					lowerPrice -= 1;
				} else {
					lowerPrice = lowerPrice / 10;
					lowerPrice -= 1;
				}
				price = price + lowerPrice;
				console.log('price: '+ price);
				var data = {
					foodName: base.postInputFoodname.val()
					,price: price
					,quantity: base.postInputQuantity.val()
					,ingredients: base.postInputIngredient.val()
					,description: base.postInputDescription.val()
					,imageURL: base.imageDataURL
					,latLng: {
						lat: base.postInputLat.val()
						,lng: base.postInputLng.val()
					}
				};
				
				$.ajax({
					type: "POST"
					,url: postURL
					,data: data
					,success: base.finishPost(base)
					,async: true
				});
			}
		});

		base.clearBtn.on("click", function(e) {
			e.preventDefault();
			base.clearFields(base);
		});

		return base;
	},

	initialize: function() {
		var base = this;
		base.findElements().addEvents();
	}
};

var PostModalController = PostModalController || {};

$(document).ready(function() {
	PostModalController.initialize();
});