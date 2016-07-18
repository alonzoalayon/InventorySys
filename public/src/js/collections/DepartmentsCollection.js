var Backbone = require('backbone');
var DepartmentsModel = require('../models/ComputerModel');

var DepartmentsCollection = Backbone.Collection.extend({
    url: '/departments',
    model: DepartmentsModel
});

module.exports = DepartmentsCollection;
