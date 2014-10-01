'use strict';

var angular = require('angular');

require('angular-ui-router');
require('polymer-platform');

var app = angular.module('boilerplate', [
    'ui.router'
]);

// controllers
app.controller('LoginCtrl', ['$scope', '$log', '$state', require('./Controllers/Login')]);
app.controller('HomeCtrl', ['$scope', '$log', require('./Controllers/Home')]);
// Registers public modules
app.controller('ModuleCtrl', ['$scope', '$log', require('./Controllers/Modules/Home')]);
app.controller('ModuleUserCtrl', ['$scope', '$log', require('./Controllers/Modules/User')]);
app.controller('ModuleTodoListCtrl', ['$scope', '$log', require('./Controllers/Modules/TodoList')]);
// Registers admin modules
app.controller('AdminCtrl', ['$scope', '$log', require('./Controllers/Admin/Home')]);
app.controller('AdminUserCtrl', ['$scope', '$log', 'UserService', require('./Controllers/Admin/User')]);

// Services
app.service('UserService', ['$rootScope', '$log', require('./Services/User')]);
app.service('TodoListService', ['$rootScope', '$log', require('./Services/TodoList')]);

// Config
app.config(['$stateProvider', '$urlRouterProvider', require('./Config/Router')]);

// Run
app.run(['$rootScope', '$window', '$log', require('./Run')]);

module.exports = app;
