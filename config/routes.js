app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/index');

    // Redirect any unresolved url
    $urlRouterProvider.otherwise("/index");

    $stateProvider

        .state('index', {
            url: "/index",
            templateUrl: "modules/home/home.view.html",
            controller: "homeController"
        })

}]);
