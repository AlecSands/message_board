var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var messageSchema = new Schema({
  name: {type: String, required: true},
  message: {type: String, required: true}
});

// export our model
module.exports = mongoose.model('message', messageSchema);
