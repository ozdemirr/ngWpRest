shared.directive('categories',function() {
    return {
        restrict:'E',
        templateUrl: 'modules/shared/view/categories.html',
        link: function($scope, element, attrs){
        },
        controller: function($scope, wpRest){
            wpRest.getCategories()
                .then(function(data){
                    $scope.categories = data;
                })
        }
    };
});