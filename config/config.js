app.config(['$httpProvider', function ($httpProvider) {
    // enable http caching
    $httpProvider.defaults.cache = true;
}]);

app.config(['wpRestConfigProvider',function(wpRestConfigProvider){
    wpRestConfigProvider.siteUrl = "https://gelistir.net";
}]);

app.config(function($sceProvider) {
    $sceProvider.enabled(false);
});