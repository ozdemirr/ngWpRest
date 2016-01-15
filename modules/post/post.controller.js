post.controller('postController', ['$rootScope', '$scope', 'wpRest', '$window','$stateParams',function($rootScope, $scope, wpRest,$window,$stateParams){

    $scope.postId = $stateParams.id;

    wpRest.getPost($scope.postId)
        .then(function(data){
            $scope.post = data;
        }, function(){
            $scope.errorMessage = "No post!";
        });

}]);