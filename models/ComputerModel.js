var mongoose = require('mongoose');
var backbone = require('backbone');
var Schema   = mongoose.Schema;

var computerSchema = new Schema({	'computer_id' : Number,	'computer_owner' : String,	'computer_description' : String,	'computer_department' : String});

module.exports = mongoose.model('Computer', computerSchema);
