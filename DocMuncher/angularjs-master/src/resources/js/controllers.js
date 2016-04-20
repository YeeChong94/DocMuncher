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

    $scope.selectedTab = $scope.tabs[0];
    $scope.setMasterTab = function(tab) {
        $scope.selectedTab = tab;
    }

    $scope.isSelectedTab = function(tab) {
        return $scope.selectedTab === tab;
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
            name: 'Specific performance clauses in national legislation of European States',
            link: '#',
            active: 'active',
            ingested: 43232,
            riskyClusters: 34,
            riskyDocuments: 653,
        },
        {
            id: 2,
            name: 'Infringment procedures against national states on a specific directive',
            link: '#',
            active: 'active',
            ingested: 5636,
            riskyClusters: 65,
            riskyDocuments: 324,
        },
        {
            id: 3,
            name: 'Conditions precedent on Free Hill loan agreement',
            link: '#',
            active: 'active',
            ingested: 545,
            riskyClusters: 542,
            riskyDocuments: 55555,
        },
        {
            id: 4,
            name: 'National legislation on unfair contract terms',
            link: '#',
            active: 'active',
            ingested: 4522,
            riskyClusters: 5,
            riskyDocuments: 54,
        },
        {
            id: 5,
            name: 'Definition and verification of securities in a loan agreement',
            link: '#',
            active: 'active',
            ingested: 432432,
            riskyClusters: 34,
            riskyDocuments: 4322,
        }
    ];

    $scope.new = {
        name: 'New Project',
    }

    $scope.selected = {
        id: 1,
        name: 'Overview',
        link: '#',
        active: 'active',
        ingested: 32432432,
        riskyClusters: 324,
        riskyDocuments: 342342,
    }

    $scope.setMaster = function(project) {
        $scope.selected = project;
    }

    $scope.isSelected = function(project) {
        return $scope.selected === project;
    }
});

DocMuncher.controller('SavedCtrl', function ($scope) {
    $scope.documents = [
        {
            id: 1,
            name: 'Document 1',
            link: '../resources/pdf/1.pdf',
            risk: 87,
            notes: 'Blablablabla',
        },
        {
            id: 2,
            name: 'Document 2',
            link: '../resources/pdf/2.pdf',
            risk: 43,
            notes: 'Blablablablablabla',
        },
        {
            id: 3,
            name: 'Document 3',
            link: '../resources/pdf/3.pdf',
            risk: 3,
            notes: 'Blablablablablablablablabla',
        },
        {
            id: 4,
            name: 'Document 4',
            link: '../resources/pdf/4.pdf',
            risk: 78,
            notes: 'Blabla',
        },
    ];

    $scope.new = {
        name: 'New Project',
    }

    $scope.selected = $scope.documents[0];

    $scope.setMaster = function(doc) {
        $scope.selected = doc;
    }

    $scope.isSelected = function(doc) {
        return $scope.selected === doc;
    }
});

// Use for embedding pdf files.
// Syntax: <embed embed-src="..." type='application/pdf'>
DocMuncher.directive('embedSrc', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var current = element;
                scope.$watch(function() { return attrs.embedSrc; }, function () {
                    var clone = element
                              .clone()
                              .attr('src', attrs.embedSrc);
                    current.replaceWith(clone);
                    current = clone;
                });
            }   
        };
    })