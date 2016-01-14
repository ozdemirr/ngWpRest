home.controller('homeController', ['$rootScope', '$scope', 'wpRest', '$window',function($rootScope, $scope, wpRest,$window){

    $scope.currentPage = 1;

    wpRest.getPosts($scope.currentPage)
        .then(function(data){
            $scope.posts = data;
        });

    $scope.getPreviousPosts = function(){

        wpRest.getPosts($scope.currentPage + 1)
            .then(function(data){
                if(data.length > 0){
                    $scope.posts = data;
                    $scope.currentPage++;
                }else{
                    $scope.errorMessage = "No more posts!";
                }

                $window.scrollTo(0, 0);

            });
    };

}]);