app.config(['$httpProvider', function ($httpProvider) {
    // enable http caching
    $httpProvider.defaults.cache = true;
}]);

app.config(['wpRestConfigProvider',function(wpRestConfigProvider){
    wpRestConfigProvider.siteUrl = "http://angulartr.com";
}]);

app.config(function($sceProvider) {
    $sceProvider.enabled(false);
});