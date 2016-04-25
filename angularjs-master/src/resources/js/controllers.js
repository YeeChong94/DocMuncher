var DocMuncher = angular.module('DocMuncher', ['ngRoute']);

DocMuncher.value('currentProject', '');
DocMuncher.value('currentDocument', '');

DocMuncher.controller('HeaderCtrl', function ($scope) {
    $scope.activeTab = 'Home';
  	$scope.tabs = [
        {
        	name: 'Home',
        	color: '#30afa4',
        	link: '#/',
        },
        {
        	name: 'Project Overview',
        	color: '#009fda',
        	link: '#/projectOverview',
        },
        {
        	name: 'Cluster Overview',
        	color: '#6a1ccd',
        	link: '#/clusterOverview',
        },
        {
        	name: 'Document Overview',
        	color: '#be0f12',
        	link: '#/documentOverview',
        },
        {
        	name: 'Saved Documents',
        	color: '#aac327',
        	link: '#/savedDocuments',
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

// Configure the Routes
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

DocMuncher.controller('HomeCtrl', function ($scope, currentProject) {
    $scope.projects = [
        {
            id: 1,
            name: 'Specific performance clauses in national legislation of European States',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a aliquet mauris, sed bibendum dui. Etiam posuere risus ac purus ornare imperdiet. Ut nec elit dictum, maximus dui non, facilisis turpis. Curabitur mauris lacus, pulvinar ac lectus quis, euismod lobortis libero. Morbi sit amet mollis velit, at gravida elit. Donec ullamcorper est id elit gravida pulvinar. Sed suscipit lorem justo, et scelerisque urna blandit nec.',
            link: '#',
            active: 'active',
            ingested: 43232,
            riskyClusters: 34,
            riskyDocuments: 653,
        },
        {
            id: 2,
            name: 'Infringment procedures against national states on a specific directive',
            description: 'Pellentesque felis nunc, dictum vel bibendum non, convallis a sem. Phasellus nibh lectus, consectetur vel mi vitae, congue volutpat nibh. Vivamus turpis massa, dictum porta ante eu, molestie elementum orci. Maecenas sed tortor vel magna consequat cursus. Vivamus dictum, urna non sagittis tincidunt, nibh lectus porttitor leo, et finibus tellus ex eget arcu.',
            link: '#',
            active: 'active',
            ingested: 5636,
            riskyClusters: 65,
            riskyDocuments: 324,
        },
        {
            id: 3,
            name: 'Conditions precedent on Free Hill loan agreement',
            description: 'Nullam id nibh nisl. Nam iaculis rhoncus felis, eu gravida dui tincidunt eu. Maecenas at mollis tortor. Etiam pellentesque magna at ultricies tempor. Phasellus non commodo sapien, a sodales risus.',
            link: '#',
            active: 'active',
            ingested: 545,
            riskyClusters: 542,
            riskyDocuments: 55555,
        },
        {
            id: 4,
            name: 'National legislation on unfair contract terms',
            description: 'Quisque sed dui eu erat congue maximus. Sed non vulputate lacus. Nullam et ante at lorem gravida cursus ac ut velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id finibus elit. Duis ultrices maximus purus, nec posuere massa feugiat at.',
            link: '#',
            active: 'active',
            ingested: 4522,
            riskyClusters: 5,
            riskyDocuments: 54,
        },
        {
            id: 5,
            name: 'Definition and verification of securities in a loan agreement',
            description: 'Phasellus ac augue tellus. Duis scelerisque, mauris vitae hendrerit semper, dolor ligula ullamcorper ipsum, eu luctus justo arcu eleifend dui.',
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
        currentProject = project;
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
            notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a aliquet mauris, sed bibendum dui. Etiam posuere risus ac purus ornare imperdiet. Ut nec elit dictum, maximus dui non, facilisis turpis. Curabitur mauris lacus, pulvinar ac lectus quis, euismod lobortis libero. Morbi sit amet mollis velit, at gravida elit. Donec ullamcorper est id elit gravida pulvinar. Sed suscipit lorem justo, et scelerisque urna blandit nec.',
        },
        {
            id: 2,
            name: 'Document 2',
            link: '../resources/pdf/2.pdf',
            risk: 43,
            notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a aliquet mauris, sed bibendum dui. Etiam posuere risus ac purus ornare imperdiet.',
        },
        {
            id: 3,
            name: 'Document 3',
            link: '../resources/pdf/3.pdf',
            risk: 3,
            notes: 'Ut nec elit dictum, maximus dui non, facilisis turpis. Curabitur mauris lacus, pulvinar ac lectus quis, euismod lobortis libero. Morbi sit amet mollis velit, at gravida elit.',
        },
        {
            id: 4,
            name: 'Document 4',
            link: '../resources/pdf/4.pdf',
            risk: 78,
            notes: 'Nullam id nibh nisl. Nam iaculis rhoncus felis, eu gravida dui tincidunt eu. Maecenas at mollis tortor. Etiam pellentesque magna at ultricies tempor. ',
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

DocMuncher.controller('ProjectCtrl', function ($scope, currentProject) {
   $(function () {
    Highcharts.setOptions({
     colors: ['#eb534e', '#4db853', '#ebae54'],
     chart: {
            style: {
                fontFamily: '"Roboto Condensed", sans-serif',
                fontSize: '14px'
            }
        }
    });
    // Create the chart
    $('#pie-chart-container').highcharts({
        chart: {
            type: 'pie',
            backgroundColor: null
        },
        title: {
            text: currentProject.name
        },
        subtitle: {
            text: 'Click the slices to view sub-clusters'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Clusters',
            colorByPoint: true,
            data: [{
                name: 'Risky',
                y: 56.33,
                drilldown: 'Risky'
            }, {
                name: 'Risk-Free',
                y: 24.03,
                drilldown: 'Risk-Free'
            }, {
                name: 'Borderline',
                y: 10.38,
                drilldown: 'Borderline'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Risky',
                id: 'Risky',
                colorByPoint: false,
                data: [
                    ['Cluster 1', 24.13],
                    ['Cluster 2', 17.2],
                    ['Cluster 3', 8.11],
                    ['Cluster 4', 5.33],
                    ['Cluster 5', 1.06],
                    ['Cluster 6', 0.5]
                ]
            }, {
                name: 'Risk-Free',
                id: 'Risk-Free',
                colorByPoint: false,
                data: [
                    ['Cluster 1', 5],
                    ['Cluster 2', 4.32],
                    ['Cluster 3', 3.68],
                    ['Cluster 4', 2.96],
                    ['Cluster 5', 2.53],
                    ['Cluster 6', 1.45],
                    ['Cluster 7', 1.24],
                    ['Cluster 8', 0.85],
                    ['Cluster 9', 1.24],
                    ['Cluster 10', 0.85]
                ]
            }, {
                name: 'Boderline',
                id: 'Borderline',
                colorByPoint: false,
                data: [
                    ['Cluster 1', 2.76],
                    ['Cluster 2', 2.32],
                    ['Cluster 3', 2.31],
                    ['Cluster 4', 1.27],
                    ['Cluster 5', 1.02],
                    ['Cluster 6', 0.33],
                    ['Cluster 7', 0.22],
                    ['Cluster 8', 0.15]
                ]
            }]
        }
    });
    });

    $scope.selected = 1;

    $scope.setMaster = function(aux) {
        $scope.selected = aux;
    }

    $scope.isSelected = function(aux) {
        return $scope.selected === aux;
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