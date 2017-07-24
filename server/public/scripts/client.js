console.log('js sourced');

var app = angular.module('myApp', []);

// I decided that client side routes were not necessary for this app since
// there will only be one controller.
app.controller('MessageController', function($http){
  // store the controller in a variable
  var mc = this;
  console.log(mc);

  // message input variables
  mc.name = "";
  mc.message = "";

  mc.allMessages= [];

  // on submit button click function
  mc.newMessage = function() {
    newMessage = {name: mc.name, message: mc.message};
    console.log(newMessage);
    $http.post('/newMessage', newMessage).then(function(response) {
      console.log('success: ' + response.data);
      mc.getMessages();
    });
  };

  // get all items from the databaseUrl
  mc.getMessages = function() {
    console.log('test messages get');
    $http.get('/newMessage').then(function(response) {
      console.log('success: ' + response.data);
      mc.allMessages = response.data;
    });
  };

  mc.getMessages();
});
