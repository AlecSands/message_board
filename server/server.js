var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

var Message = require('./models/message.schema.js');

// Just learned this today, but I think I've seen it before.
app.use(express.static('server/public'));

app.use(bodyParser.json());

// Require Mongoose so we can talk to the database.
var mongoose = require('mongoose');

// Locate the server for mongoose.
var databaseUrl = 'mongodb://localhost:27017/antares';
mongoose.connect(databaseUrl);

// Event listener for successful connection to the db.
mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

// Even listener for failed connection to the db.
mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

app.post('/newMessage', function(req, res) {
  console.log('message recieved:', req.body);

  // create an object instance from our Person model
  var addMessage = new Message(req.body);

  addMessage.save({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      data = 'nice';
      res.send(data);
    }
  });


});

app.get('/newMessage', function(req, res) {
  console.log('getting message');

  // create an object instance from our Person model

  Message.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      console.log('request recieved');
      res.send(data);
    }
  });


});

app.listen(port, function() {
  console.log('listening on', port);
});
