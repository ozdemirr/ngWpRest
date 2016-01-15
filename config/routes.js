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

}]);
