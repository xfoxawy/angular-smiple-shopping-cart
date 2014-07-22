(function(){

	var app = angular.module('store-products',[]);
	
	
	app.directive('productTitle', function(){
		return {
			restrict : 'E', // stands for Element
			templateUrl : 'templates/product-title.html'	
		};
	});
	
	app.directive('productTitle', function(){
		return {
			restrict : 'A', // stands for attribute elemet
			templateUrl : 'templates/product-title.html'
		};
	});
	
	app.directive('productPanels', function(){
		return {
			restrict : 'E',
			templateUrl : 'templates/product-panels.html',
			controller : function(){
				this.tab = 1;
				this.isSet = function(checkTab) {
				return this.tab === checkTab;
				};
				this.setTab = function(setTab) {
				this.tab = setTab;
				};
			},
			controllerAs : 'panels'
			
		};
	});

})();
