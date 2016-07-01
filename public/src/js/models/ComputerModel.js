var Backbone = require('backbone');
var mongoose = require('mongoose');
var ComputerModel = Backbone.Model.extend({
    urlRoot: '/computers',
    idAttribute: '_id'
});

module.exports = ComputerModel;
