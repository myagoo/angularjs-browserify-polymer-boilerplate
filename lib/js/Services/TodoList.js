'use strict';

var TodoListService = function($rootScope, $log) {
    $log.log('TodoListService');


    this.update = function(value){
        $log.log(value, 'value');
    };

    var todos = [];

    var strings = [
        "have some fun ><",
        "buy milk :O",
        "do dishes T.T"
    ];

    var generateCount = 500;

    var generateData = function() {
        var data = [];
        for (var i = 0; i < generateCount; i++) {
            var divider = name.charAt(0);
            data.push({
                index: i,
                text: strings[i % 3]
            });
        }
        return data;
    };
    this.getCount = function() {
        return todos.length;
    },
    this.getTodos = function() {
        if (this.getCount()) {
            return todos;
        }
        todos = generateData();
        return todos;
    };
};

module.exports = TodoListService;
