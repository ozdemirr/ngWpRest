home.controller('homeController', ['$rootScope', '$scope', 'wpRest', '$window','$stateParams',function($rootScope, $scope, wpRest,$window,$stateParams){

    if($stateParams.page){
        $scope.currentPage = parseInt($stateParams.page);
    }else{
        $scope.currentPage = 1;
    }

    wpRest.getPosts($scope.currentPage)
        .then(function(data){

            if(data.length > 0){
                $scope.posts = data;
            }else{
                $scope.errorMessage = "No more posts!";
            }

        });

}]);