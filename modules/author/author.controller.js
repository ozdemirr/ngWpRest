author.controller('authorController', ['$rootScope', '$scope', 'wpRest', '$window','$stateParams',function($rootScope, $scope, wpRest,$window,$stateParams){

    $scope.authorId = $stateParams.id;
    if($stateParams.page){
        $scope.currentPage = parseInt($stateParams.page);
    }else{
        $scope.currentPage = 1;
    }

    wpRest.getAuthorDetail($scope.authorId, $scope.currentPage)
        .then(function(data){
            $scope.authorPosts = data;
        }, function(){
            $scope.errorMessage = "No author!";
        });
}]);