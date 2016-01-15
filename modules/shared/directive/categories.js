shared.directive('categories',function() {
    return {
        restrict:'E',
        templateUrl: 'modules/shared/view/categories.html',
        controller: function($scope, wpRest){
            wpRest.getCategories()
                .then(function(data){
                    $scope.categories = data;
                })
        }
    };
});