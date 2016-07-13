var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var departmentsSchema = new Schema({	'departments' : String});

module.exports = mongoose.model('Departments', departmentsSchema);
