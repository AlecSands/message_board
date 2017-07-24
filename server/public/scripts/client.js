console.log('js sourced');

var app = angular.module('myApp', []);

// I decided that client side routes were not necessary for this app since
// there will only be one controller.
app.controller('MessageController', function($http){

  var mc = this;
  console.log(mc);


  mc.name = "";
  mc.message = "";

  mc.newMessage = function() {
    newMessage = {name: mc.name, message: mc.message};
    console.log(newMessage);
    $http.post('/newMessage', newMessage).then(function(response) {
      console.log('success: ' + response.data);
    });
  };

});
