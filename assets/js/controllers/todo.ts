'use strict';

/*todoCtrl.$inject = ['$scope', 'dataService'];

function todoCtrl($scope, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    dataService.saveTodos(filteredTodos);
  }; 
}

module.exports = todoCtrl;*/