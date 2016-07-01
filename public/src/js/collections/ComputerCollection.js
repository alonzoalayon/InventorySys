var Backbone = require('backbone');
var ComputerModel = require('../models/ComputerModel');

var ComputerCollection = Backbone.Collection.extend({
    url: '/computers',
    model: ComputerModel
});

module.exports = ComputerCollection;
