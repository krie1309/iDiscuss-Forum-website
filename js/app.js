// // document.write(`hello world`);
        
var app = angular.module('angularApp', ["ngRoute"])

                 .config(function($routeProvider) {
                     $routeProvider
                        .when("/", {
                            templateUrl : "pages/main.html",
                            controller: "mainCont",
                            activetab: 'home'
                        })
                        .when("/login", {
                            templateUrl : "pages/login.html",
                            controller: "loginCont",
                            activetab: 'login'
                        })
                        .when("/signup", {
                            templateUrl : "pages/signup.html",
                            controller: "signupCont",
                            activetab: 'signup'
                        })
                        .when("/query", {
                            templateUrl : "pages/query.html",
                            controller: "aboutCont",
                            activetab: 'about'
                        })
                        .otherwise({ redirectTo: '/' });
                 })
                 
                 .run(['$rootScope', "$route", function ($scope, $route) {
                    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
                      $scope.part = $route.current.activetab;
                    });
                }])

                 .controller("mainCont", function($scope) {
                    $scope.message = "HOME";
                 })
                 .controller("loginCont", function($scope) {
                    $scope.message = "LOGIN";
                 })
                 .controller("signupCont", function($scope) {
                    $scope.message = "REGISTER";
                 })
                 .controller("aboutCont", function($scope) {
                    $scope.message = "QUERY-SOLUTION";
                 });
                 
