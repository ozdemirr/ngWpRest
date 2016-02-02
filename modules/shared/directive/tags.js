shared.directive('tags',function() {
    return {
        restrict:'E',
        templateUrl: 'modules/shared/view/tags.html',
        controller: function($scope, wpRest){
            wpRest.getTags()
                .then(function(data){
                    $scope.tags = data;
                })
        }
    };
});