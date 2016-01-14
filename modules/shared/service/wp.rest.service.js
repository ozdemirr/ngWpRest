
shared.provider('wpRestConfig', function() {
    var self = this;
    this.$get = function() {
        return {
            siteUrl: self.siteUrl
        };
    };
});

shared.factory('wpRest', ['$http', 'wpRestConfig', function($http, wpRestConfig){

    var wpRest = {};

    wpRest.apiUrl = wpRestConfig.siteUrl + "/wp-json/wp/v2/";

    wpRest.getBlogInfo = function(){
        return $http.get(wpRestConfig.siteUrl + "/wp-json")
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getPages = function(){
        return $http.get(wpRest.apiUrl+ "pages")
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getPosts = function(pageNumber){
        return $http.get(wpRest.apiUrl+ "posts?page=" + pageNumber)
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getCategories = function(pageNumber){
        return $http.get(wpRest.apiUrl+ "categories")
            .then(function(response) {
                return response.data;
            });
    };

    return wpRest;

}]);

