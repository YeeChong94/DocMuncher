var DocMuncher = angular.module('DocMuncher', ['ngRoute']);

DocMuncher.factory('UserService', function() {
  return {
    currentProject: '',
    currentCluster: {
        name: '',
    },
    currentTab: '',
    currentDoc: '',
    tabs: [
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
    ],
    documents: [
        {
            name: 'Document 1',
            risk: 23,
            link: '../resources/pdf/1.pdf',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a aliquet mauris, sed bibendum dui. Etiam posuere risus ac purus ornare imperdiet. Ut nec elit dictum, maximus dui non, facilisis turpis.',
        },
        {
            name: 'Document 2',
            risk: 85,
            link: '../resources/pdf/2.pdf',
            notes: 'Etiam tellus ligula, tempus vel suscipit efficitur, pretium eleifend nunc. Mauris posuere vel tellus vel venenatis. Aenean elementum vel tortor id tempus. Ut id malesuada turpis, sed facilisis ligula.',
        },
        {
            name: 'Document 3',
            risk: 56,
            link: '../resources/pdf/3.pdf',
            notes: 'Mauris facilisis sagittis odio eget elementum. Suspendisse ut semper lacus. Sed erat nulla, bibendum vel mauris nec, malesuada varius odio. In bibendum ullamcorper turpis vitae condimentum. Vivamus sed pharetra orci. ',
        },
        {
            name: 'Document 4',
            risk: 76,
            link: '../resources/pdf/4.pdf',
            notes: 'Nam sodales enim ut eros feugiat, in pretium turpis condimentum. Donec sodales ante quis mauris cursus dignissim. Vestibulum tellus quam, commodo porta est nec, dignissim mollis sem. Sed in fermentum purus.',
        },
        {
            name: 'Document 5',
            risk: 16,
            link: '../resources/pdf/5.pdf',
            notes: '',
        },
        {
            name: 'Document 6',
            risk: 73,
            link: '../resources/pdf/6.pdf',
            notes: '',
        },
        {
            name: 'Document 7',
            risk: 13,
            link: '../resources/pdf/7.pdf',
            notes: 'Nam hendrerit sem non nibh auctor eleifend. Donec ex tellus, accumsan vitae euismod sed, tincidunt vel magna. Nunc at orci ac nunc ornare dignissim id eleifend leo. Etiam a est suscipit, semper arcu at, sodales nisi.',
        },
        {
            name: 'Document 8',
            risk: 14,
            link: '../resources/pdf/8.pdf',
            notes: 'Duis eget ex id sapien mollis accumsan. Etiam semper magna sed nisl tempor, nec pretium tellus ornare. Integer quis suscipit felis, et dapibus purus. Praesent et hendrerit odio. Integer venenatis ut nibh nec accumsan.',
        },
        {
            name: 'Document 9',
            risk: 32,
            link: '../resources/pdf/9.pdf',
            notes: '',
        },
        {
            name: 'Document 10',
            risk: 58,
            link: '../resources/pdf/10.pdf',
            notes: 'Suspendisse sed blandit neque, pharetra sodales quam. Sed sed libero sit amet est egestas cursus. Nam consectetur orci sed eros feugiat, ac imperdiet mi placerat. In non dui nec nulla hendrerit scelerisque et vel lorem.',
        },
        {
            name: 'Document 11',
            risk: 64,
            link: '../resources/pdf/11.pdf',
            notes: '',
        },
        {
            name: 'Document 12',
            risk: 70,
            link: '../resources/pdf/12.pdf',
            notes: 'Aliquam porttitor tortor sit amet libero auctor tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quam sem, dignissim dictum dictum non, rhoncus ut ante. In odio neque, bibendum nec hendrerit at, lacinia sed lacus. Nulla suscipit arcu nec commodo efficitur. Praesent at malesuada nulla. Suspendisse nec tortor lobortis, consequat purus varius, vehicula nunc. Etiam interdum ullamcorper porttitor.',
        },
        {
            name: 'Document 13',
            risk: 42,
            link: '../resources/pdf/13.pdf',
            notes: 'Pellentesque quam elit, blandit non bibendum in, scelerisque vitae ipsum. Vestibulum eu ipsum eu massa imperdiet tincidunt ornare quis ex. Aliquam eu mi facilisis nunc placerat placerat vitae eu sem. ',
        },
        {
            name: 'Document 14',
            risk: 58,
            link: '../resources/pdf/14.pdf',
            notes: '',
        },
    ],
    projects: [
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
    ]
  };
});

DocMuncher.controller('HeaderCtrl', function ($scope, UserService) {
    $scope.activeTab = 'Home';
  	$scope.tabs = UserService.tabs;

    $scope.selectedTab = $scope.tabs[0];
    $scope.setMasterTab = function(tab) {
        $scope.selectedTab = tab;
        UserService.currentTab = tab;
    }

    $scope.isSelectedTab = function(tab) {
        return UserService.currentTab === tab;
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

DocMuncher.controller('HomeCtrl', function ($scope, UserService) {
    UserService.currentTab = UserService.tabs[0];
    $scope.projects = UserService.projects;

    $scope.new = {
        name: 'New Project',
    }

    if (UserService.currentProject === '') {
        $scope.selected = {
            name: 'Overview',
            link: '#',
            ingested: 432432,
            riskyClusters: 34,
            riskyDocuments: 4322,
        }
    }
    else {
        $scope.selected = UserService.currentProject;
    }


    $scope.setMaster = function(project) {
        $scope.selected = project;
        UserService.currentProject = project;
    }

    $scope.isSelected = function(project) {
        return $scope.selected === project;
    }
});

DocMuncher.controller('SavedCtrl', function ($scope, UserService) {
    UserService.currentTab = UserService.tabs[4];
    $scope.documents = [UserService.documents[4], 
                        UserService.documents[6], 
                        UserService.documents[7], 
                        UserService.documents[9], 
                        UserService.documents[11], 
                        UserService.documents[3]
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

DocMuncher.controller('ProjectCtrl', function ($scope, UserService, $location) {
    UserService.currentTab = UserService.tabs[1];
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
                text: ''
            },
            subtitle: {
                text: 'Click the slices to view division by clusters'
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.y:.1f}%',
                        fontSize: '14px',
                    },
                    allowPointSelect: true,
                    point: {
                        events: {
                            select: function() {                                
                                UserService.currentCluster = this;
                                UserService.currentTab = UserService.tabs[2];
                                $scope.$apply(function() { $location.path("/clusterOverview"); });
                            }
                        }  
                    }
                },
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            series: [{
                name: 'Project Overview',
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
                    y: 19.64,
                    drilldown: 'Borderline'
                }]
            }],
            drilldown: {
                series: [{
                    name: 'Risky',
                    id: 'Risky',
                    colorByPoint: false,
                    data: [
                        ['NDA', 28],
                        ['HR Policies', 13],
                        ['Supply of Goods', 8],
                        ['IP Rights', 30],
                        ['Unknown Cluster', 21]
                    ]
                }, {
                    name: 'Risk-Free',
                    id: 'Risk-Free',
                    colorByPoint: false,
                    data: [
                        ['NDA', 48],
                        ['HR Policies', 8],
                        ['Supply of Goods', 19],
                        ['IP Rights', 12],
                        ['Unknown Cluster', 13]
                    ]
                }, {
                    name: 'Boderline',
                    id: 'Borderline',
                    colorByPoint: false,
                    data: [
                        ['NDA', 13],
                        ['HR Policies', 28],
                        ['Supply of Goods', 10],
                        ['IP Rights', 40],
                        ['Unknown Cluster', 9]
                    ]
                }]
            }
        });
    });

    $(function () {
        $('#heat-map-container').highcharts({
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 80,
                plotBorderWidth: 0,
                backgroundColor: null
            },


            title: {
                text: ''
            },

            xAxis: {
                categories: ['World Wide Imp.', 'Widget Care', 'Coho', 'Litware'],
                gridLineColor: '#FFFFFF',
                minorGridLineColor: '#FFFFFF',
                labels: {
                    style: {
                        fontSize:'15px'
                    }
                }
            },

            yAxis: {
                categories: ['NDA', 'HR Policies', 'Supply of Goods', 'IP Rights', 'Unknown Cluster'],
                title: null,
                gridLineColor: '#FFFFFF',
                minorGridLineColor: '#FFFFFF',
                labels: {
                    style: {
                        fontSize:'15px'
                    }
                }
            },

            colorAxis: {
                min: 0,
                stops: [
                    [0, '#4db853'],
                    [0.2, '#4db853'],
                    [0.3, '#ebae54'],
                    [0.5, '#ebae54'],
                    [0.7, '#ebae54'],
                    [0.8, '#eb534e']
                ],
            },

            plotOptions: {
                series: {
                    allowPointSelect: true,
                    point: {
                        events: {
                            select: function() {   
                                var aux = this.series.xAxis.categories[this.x].toString() + " with " + this.series.yAxis.categories[this.y].toString();
                                UserService.currentCluster.name = aux;
                                console.log(this.series.xAxis.categories[this.x]);
                                console.log(UserService.currentCluster.name);
                                UserService.currentTab = UserService.tabs[2];
                                $scope.$apply(function() { $location.path("/clusterOverview"); });
                            }
                        }  
                    }
                },
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280,
            },

            tooltip: {
                formatter: function () {
                    return '</b>' + this.point.value + '%</b> risk index';
                }
            },

            series: [{
                name: '',
                borderWidth: 1,
                data: [[0, 0, 10], [0, 1, 19], [0, 2, 68], [0, 3, 24], [0, 4, 4], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 17], [1, 4, 38], [2, 0, 35], [2, 1, 15], [2, 2, 13], [2, 3, 64], [2, 4, 78], [3, 0, 72], [3, 1, 32], [3, 2, 84], [3, 3, 19], [3, 4, 11]],
                dataLabels: {
                    enabled: true,
                    color: '#000000'
                }
            }]

        });
    });

    $scope.currentProject = UserService.currentProject;

    $scope.selected = 1;

    $scope.setMaster = function(aux) {
        $scope.selected = aux;
    }

    $scope.isSelected = function(aux) {
        return $scope.selected === aux;
    }

    $scope.setMasterCluster = function(aux) {
        UserService.currentCluster = aux;
    }
});

DocMuncher.controller('ClusterCtrl', function ($scope, UserService, $location) {
    UserService.currentTab = UserService.tabs[2];
    $scope.currentCluster = UserService.currentCluster;
    $scope.documents = UserService.documents;

    $scope.currentDoc = UserService.currentDoc;

    $scope.setMasterDoc = function(doc) {
        UserService.currentDoc = doc;
        $scope.currentDoc = doc;
        console.log(doc.name);
    };

    $scope.activateDoc = function(doc) {
        UserService.currentTab = UserService.tabs[3];
        $location.path("/documentOverview");
    }
});

DocMuncher.controller('DocCtrl', function ($scope, UserService, $location) {
    UserService.currentTab = UserService.tabs[3];
    $scope.currentDoc = UserService.currentDoc;
    console.log($scope.currentDoc.link);
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