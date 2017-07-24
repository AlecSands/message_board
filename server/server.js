var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

// Just learned this today, but I think I've seen it before.
app.use(express.static('server/public'));

app.use(bodyParser.json());

app.post('/newMessage', function(req, res) {
  console.log('message recieved:', req.body);
  data = 'nice';
  res.send(data);
});

app.listen(port, function() {
  console.log('listening on', port);
});
