var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var departmentsSchema = new Schema({

module.exports = mongoose.model('Departments', departmentsSchema);