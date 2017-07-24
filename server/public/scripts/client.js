console.log('js sourced');

var app = angular.module('myApp', []);

app.controller('MessageController', function(){

  var mc = this;
  console.log(mc);

});
