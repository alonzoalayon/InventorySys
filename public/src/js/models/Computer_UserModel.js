var Backbone = require('backbone');
var mongoose = require('mongoose');
var Computer_UserModel = Backbone.Model.extend({
    urlRoot: '/computer_user',
    idAttribute: '_id'
});

module.exports = Computer_UserModel;
