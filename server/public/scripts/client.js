console.log('js sourced');

var app = angular.module('myApp', []);

// I decided that client side routes were not necessary for this app since
// there will only be one controller.
app.controller('MessageController', function(){

  var mc = this;
  console.log(mc);

  mc.name = "";
  mc.message = "";

  mc.newMessage = function() {
    console.log('add new message clicked by', mc.name, ', sending this message:', mc.message);
  };

});
