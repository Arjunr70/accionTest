describe('myController', function() {
 var mockdata=[{userId:1,id:1,title:'First Title',body:'First Body'},
                {userId:2,id:2,title:'Second Title',body:'Second Body'}];
 
 var myService ={
 getData:function()
 {
  return mockdata;
 }
    beforeEach(module(('myModule'));

    var $controller;

    beforeEach(inject(function(_$controller_,myService){
              $controller = _$controller_;
               myService=myService;
    }));

    describe('controller when inialized ', function() {
      it('Check the json mock data ', function() {
            var $scope = {};
            var controller = $controller('myController', { $scope: $scope, myService:myService });
            expect($scope.users).toEqual(mockData);
            expect($scope.orderByField).toEqual('userId');
            expect($scope.reverseSort).toEqual(false);
             //$scope.some_name nonthing but the json data in the controller you assign to variable.
        });

it('Check sort column', function() {
           expect($scope.users[0].userId).toEqual(1);
        });
it('Check reverse sort column', function() {
            $scope.sortBy($scope.userId);
  
           expect($scope.users[0].userId).toEqual(2);
           expect($scope.reverseSort).toEqual(true);
        });
    });

describe('onclick of column header ', function() {
    var $scope={};
 var controller = $controller('myController',{$scope:$scope, myService:myService});
         var objSpy=spyOn('$scope.sortBy');
      it('Should call method on click of header colum ', function() {
//Write the test case for the code in the function
       element.byid('userIdCol').click();
        expect(objSpy).toHaveBeenCalled();

});
it('Check sort column', function() {
write a expected value for sortColumn field

       $scope.reverseSort=false;
        $scope.sortBy($scope.titile);
        
        expect($scope.reverseSort).toEqual(true);
         expect($scope.users[0].title).toEqual('First Title');
        });
it('Check reverse sort column', function() {
write a expected value for reverse sortColumn field
$scope.reverseSort=true;
        $scope.sortBy($scope.titile);
        
        expect($scope.reverseSort).toEqual(false);
        expect($scope.users[0].title).toEqual('Second Title');
        });

    });

});
