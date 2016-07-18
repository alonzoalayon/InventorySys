var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var computer_UserSchema = new Schema({	'first_name' : String,	'last_name' : String});

module.exports = mongoose.model('Computer_User', computer_UserSchema);
