shared.directive('featuredImage',function() {
    return {
        restrict:'E',
        templateUrl: 'modules/shared/view/featuredImage.html',
        scope : {
            id : "=",
            size : "@" //because the argument is string
        },
        controller: function($scope, wpRest){
            wpRest.getFeaturedImage($scope.id)
                .then(function(data){
                    $scope.featuredImage = data;
                });

            if(!angular.isDefined($scope.size)){
                $scope.size = "medium";
            }
        }
    };
});