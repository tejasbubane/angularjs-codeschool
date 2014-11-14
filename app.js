(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
	this.products = gems;
    });

    app.controller("PanelController", function(){
	this.tab = 1;

	this.selectTab = function(setTab) {
	    this.tab = setTab;
	};
	this.isSelected = function(checkTab) {
	    return this.tab === checkTab;
	};
    });

    app.controller("ReviewController", function() {
	this.review = {};

	this.addReview = function(product) {
	    product.reviews.push(this.review);
	    this.review = {};
	};
    });

    var gems = [
	{
	    name: 'Ruby',
	    price: 2.95,
	    description: 'I love Ruby!',
	    images: [
		{
		    full: 'ruby-01-full.jpg',
		    thumb: 'ruby-01-thumb.jpg'
		},
		{
		    full: 'ruby-02-full.jpg',
		    thumb: 'ruby-02-thumb.jpg'
		}
	    ],
	    reviews: [
		{
		    stars: 5,
		    body: "I love this product",
		    author: "joe@thomas.com"
		},
		{
		    stars: 1,
		    body: "This product sucks",
		    author: "tim@hater.com"
		}
	    ],
	    canPurchase: true,
	    soldOut: false
	},
	{
	    name: "Pentagonal Gem",
	    price: 5.95,
	    description: "This gem has 5 faces.",
	    canPurchase: false,
	}
    ]
})();
