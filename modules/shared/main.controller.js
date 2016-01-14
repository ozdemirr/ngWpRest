shared.controller('mainController', ['$rootScope', '$scope','wpRest',function($rootScope, $scope,wpRest){

    wpRest.getBlogInfo()
        .then(function(data){
            $rootScope.metaTitle = data.name + " - " + data.description;
        });

    wpRest.getPages()
        .then(function(data){
           $scope.pages = data;
        });
}]);