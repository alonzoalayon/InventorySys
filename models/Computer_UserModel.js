var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var computer_UserSchema = new Schema({

module.exports = mongoose.model('Computer_User', computer_UserSchema);