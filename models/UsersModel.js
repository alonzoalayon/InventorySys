var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({

module.exports = mongoose.model('Users', usersSchema);