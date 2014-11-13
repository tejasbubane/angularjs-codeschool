(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
	this.products = gems;
    });

    var gems = [
	{
	    name: 'Ruby',
	    price: 2.95,
	    description: 'I love Ruby!',
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
