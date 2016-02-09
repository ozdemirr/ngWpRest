category.controller('categoryController', ['$rootScope', '$scope', 'wpRest', '$window','$stateParams',function($rootScope, $scope, wpRest,$window,$stateParams){
    $scope.categoryId = $stateParams.id;
    if($stateParams.page){
        $scope.currentPage = parseInt($stateParams.page);
    }else{
        $scope.currentPage = 1;
    }
    wpRest.getCategoryDetail($scope.categoryId, $scope.currentPage)
        .then(function(data){
            $scope.categories = data;
        }, function(){
            $scope.errorMessage = "No category!";
        });
}]);