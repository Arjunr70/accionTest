var app = angular
          .module("myModule", [])
          .controller("myController",['$scope','myService',function ($scope,myService) {
                 
                $scope.orderByField = 'userId';
                $scope.reverseSort = false;
                 
                $scope.sortBy=function(field){
                  $scope.orderByField = field;
                  $scope.reverseSort = !($scope.reverseSort);
               }
              
 myService.getData().then(function(response){
           $scope.employees = response;
       
                   });

      /* $http.get('http://jsonplaceholder.typicode.com/posts').then(function(response) {
               $scope.employees = response.data;*/

                   }])
         
.factory("myService", ['$http', function($http) {
       return {
           getData: function() {    
            return $http.get('http://jsonplaceholder.typicode.com/posts')
            .then(function(response) {
                
                //return data when promise resolved that would help to continue promise chain.
                return response.data;
            });
        }
       };
               }]);


 
