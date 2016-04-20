var DocMuncher = angular.module('DocMuncher', ['ngRoute']);

DocMuncher.controller('HeaderCtrl', function ($scope) {
    $scope.activeTab = 'Home';
  	$scope.tabs = [
        {
        	name: 'Home',
        	color: '#30afa4',
        	link: '#/',
            active: 'active',
        },
        {
        	name: 'Project Overview',
        	color: '#009fda',
        	link: '#/projectOverview',
            active: 'active',
        },
        {
        	name: 'Cluster Overview',
        	color: '#6a1ccd',
        	link: '#/clusterOverview',
            active: 'active',
        },
        {
        	name: 'Document Overview',
        	color: '#be0f12',
        	link: '#/documentOverview',
            active: 'active',
        },
        {
        	name: 'Saved Documents',
        	color: '#aac327',
        	link: '#/savedDocuments',
            active: 'active',
        },
    ];
    $scope.changeActive = function(tabName) {
        $scope.activeTab = tabName;
    }
});

/**
* Configure the Routes
*/
DocMuncher.config(['$routeProvider', function ($routeProvider) {
$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "HomeCtrl",
	})
	.when("/projectOverview", {
		templateUrl: "partials/projectOverview.html", 
		controller: "PageCtrl",
	})
	.when("/clusterOverview", {
		templateUrl: "partials/clusterOverview.html", 
		controller: "PageCtrl",
	})
	.when("/documentOverview", {
		templateUrl: "partials/documentOverview.html", 
		controller: "PageCtrl",
	})
	.when("/savedDocuments", {
		templateUrl: "partials/savedDocuments.html", 
		controller: "PageCtrl",
	})
	// else 404
	// .otherwise("/404", {templateUrl: "partials/404.html", <span class="highlight">controller: "PageCtrl"</span>});
}]);

DocMuncher.controller('PageCtrl', function (/* $scope, $location, $http */) {
	console.log("Page Controller reporting for duty.");
});

DocMuncher.controller('HomeCtrl', function ($scope) {
    $scope.projects = [
    {
        id: 1,
        name: 'Project 1',
        link: '#',
        active: 'active',
        ingested: 43232,
        riskyClusters: 34,
        riskyDocuments: 653,
    },
    {
        id: 2,
        name: 'Project 2',
        link: '#',
        active: 'active',
        ingested: 5636,
        riskyClusters: 65,
        riskyDocuments: 324,
    },
    {
        id: 3,
        name: 'Project 3',
        link: '#',
        active: 'active',
        ingested: 545,
        riskyClusters: 542,
        riskyDocuments: 55555,
    },
    {
        id: 4,
        name: 'Project 4',
        link: '#',
        active: 'active',
        ingested: 4522,
        riskyClusters: 5,
        riskyDocuments: 54,
    },
    {
        id: 5,
        name: 'Project 5',
        link: '#',
        active: 'active',
        ingested: 432432,
        riskyClusters: 34,
        riskyDocuments: 4322,
    }];
});