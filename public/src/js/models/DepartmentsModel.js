var Backbone = require('backbone');
var mongoose = require('mongoose');
var DepartmentsModel = Backbone.Model.extend({
    urlRoot: '/departments',
    idAttribute: '_id'
});

module.exports = DepartmentsModel;
