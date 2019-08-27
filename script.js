var demo = angular.module('demo', ['ngRoute']);

demo.run(['$route', function($route)  {
    $route.reload();
  }]);

demo.controller('firstNameController', function($scope){
    $scope.firstName = "Sathvik";
    $scope.secondName = "Rijo";

    $scope.join = function(fname, sname){
        return fname + ' ' + sname;
    }

    $scope.names = ["Sathvik", "Yogi", "SivaRk", "Sanjay", "Viva", "Sreeram", "Kamalesh"];
});

demo.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/addEvent', {templateUrl: "addevent.html", controller: 'AddEventController'}).
        when('/showEvent', {templateUrl: "showevent.html", controller: 'ShowEventController'});
        //otherwise({redirectTo: '/index'});
}]);


demo.controller('AddEventController', function($scope){
    $scope.message = "Adding message";
});

demo.controller('ShowEventController', function($scope){
    $scope.msg = "Showing message";
})
