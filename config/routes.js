app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider,$locationProvider) {

    // Redirect any unresolved url
    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: "/:page",
            templateUrl: "modules/home/home.view.html",
            controller: "homeController"
        })

        .state('post', {
            url: "/:id/:slug",
            templateUrl: "modules/post/post.view.html",
            controller: "postController"
        })

        .state('author', {
            url: "/:id/:page",
            templateUrl: "modules/author/author.view.html",
            controller: "authorController"
        })

        .state('categoryDetail', {
            url: "categoryDetail/:id/:page",
            templateUrl: "modules/category/category.view.html?" + new Date().getTime(),
            controller: "categoryController"
        })

}]);
