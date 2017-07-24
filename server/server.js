var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

// Just learned this today, but I think I've seen it before.
app.use(express.static('server/public'));

app.listen(port, function() {
  console.log('listening on', port);
});
