(function () {

    var app = angular.module("app", ["ui.router"]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                controller: "HomeCtrl as ctrl",
                templateUrl: "/app/HomeCtrl.html"
            })
            .state('admin', {
                url: "/admin",
                controller: "AdminCtrl as ctrl",
                templateUrl: "/app/AdminCtrl.html"
            });
    });

})();
