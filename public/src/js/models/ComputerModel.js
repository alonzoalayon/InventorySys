var Backbone = require('backbone');

var ComputerModel = Backbone.Model.extend({
    urlRoot: '/computers',
    idAttribute: '_id'
});

module.exports = ComputerModel;
