shared.directive('comments',function() {
    return {
        restrict:'E',
        templateUrl: 'modules/shared/view/comments.html',
        scope : {
          "id" : "="
        },
        controller: function($scope, wpRest){
            wpRest.getComments($scope.id)
                .then(function(data){
                    $scope.comments = data;
                })
        }
    };
});