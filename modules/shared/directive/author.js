shared.directive('author',function() {
    return {
        restrict:'E',
        templateUrl: 'modules/shared/view/author.html',
        scope : {
          id : "="
        },
        controller: function($scope, wpRest){
            wpRest.getAuthor($scope.id)
                .then(function(data){
                    $scope.author = data;
                })
        }
    };
});