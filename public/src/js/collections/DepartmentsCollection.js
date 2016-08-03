var Backbone = require('backbone');
var DepartmentsModel = require('../models/DepartmentsModel');

var DepartmentsCollection = Backbone.Collection.extend({
    url: '/departments',
    model: DepartmentsModel
});

module.exports = DepartmentsCollection;
