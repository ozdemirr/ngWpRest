
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

    wpRest.getPost = function(postId){
        return $http.get(wpRest.apiUrl+ "posts/" + postId)
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

    wpRest.getAuthor = function(id){
        return $http.get(wpRest.apiUrl+ "users/" + id)
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getFeaturedImage = function(id){
        return $http.get(wpRest.apiUrl+ "media/" + id)
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getComments = function(postId){
        return $http.get(wpRest.apiUrl+ "comments?post=" + postId)
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getTags = function(){
        return $http.get(wpRest.apiUrl+ "tags")
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getAuthorDetail = function(id){
        return $http.get(wpRest.apiUrl+ "posts?filter[author]=" + id)
            .then(function(response) {
                return response.data;
            });
    };

    wpRest.getCategoryDetail = function(id,page){
        return $http.get(wpRest.apiUrl+ "posts?filter[cat]=" + id + "&page=" + page)
            .then(function(response) {
                console.log('aaa');
                return response.data;
            });
    };

    return wpRest;

}]);

