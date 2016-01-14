var app = angular.module('wpApp', [
    //'ngAnimate',
    //'ngSanitize',
    'ui.router',
    'angular-loading-bar',
    'ui.bootstrap',
    'ui.utils',
    'shared',
    'home'
]);

//app.run(['$rootScope', function($rootScope) {
//
//}]);

app.config(['wpRestConfigProvider',function(wpRestConfigProvider){
    wpRestConfigProvider.siteUrl = "http://angulartr.com";
}]);

app.config(function($sceProvider) {
    $sceProvider.enabled(false);
});




