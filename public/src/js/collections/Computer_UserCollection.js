var Backbone = require('backbone');
var Computer_UserModel = require('../models/Computer_UserModel');

var Computer_UserCollection = Backbone.Collection.extend({
    url: '/computer_user',
    model: Computer_UserModel
});

module.exports = Computer_UserCollection;
