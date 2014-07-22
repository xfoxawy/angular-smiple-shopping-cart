(function (){
	var app = angular.module('store',['store-products']);
	
	app.controller('StoreController', [ '$http' ,function($http){
		//this.products = gems;
		var store = this;
		store.products = [];
		$http.get('products.json').success(function(data){
			store.products = data;
		});			
	}]);
	
	app.controller('ReviewController',function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};	
		};
	});
	

	var gems = [{
		name : 'Zircon',
		price : 25,
		description : 'this is the best mother fucker in the neighbourhood',
		canPurchase : true,
		soldOut : false,
		images : [{
			full : 'img/zircon.jpg',
			thumb : 'img/zircon_thum.png'	
		}],
		reviews : [{
			stars : 5,
			body : 'loved it',
			author : 'xfoxawy@gmail.com'			
		},{
			stars : 3,
			body : 'nice',
			author : 'his@gmail.com'
		}]
	},
	{
		name : 'garnet',
		price : 30,
		description : 'this is the better fuckin shit around here',
		canPurchase : true,
		soldOut : true,
		images : [{
			full : 'img/garnet.jpg',
			thumb : 'img/garnet_thum.png'	
		}],
		reviews : [{
			stars : 5,
			body : 'beautiful',
			author : 'ya;a@ya.com'
		}]
	},
	{
		name : 'diamond',
		price : 1000,
		description : 'yep its very expensive',
		canPurchase : true,
		soldOut : true,
		images : [],
		reviews : []
	}];
})();
