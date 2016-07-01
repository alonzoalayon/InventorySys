var Backbone = require('backbone');
var _ = require('underscore');
var ComputerModel = require('../models/ComputerModel');
var ComputerCollection = require('../collections/ComputerCollection');
var ItemView = require('./ItemView.js');
var ListView = Backbone.View.extend({
  el: '<ul></ul>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render)
  },

  render: function() {
    var that = this;
    $(this.el).html('');
    this.collection.each(function(computers) {
      var itemView = new ItemView({ model: computers });
      $(that.el).append(itemView.render().el);
    });
    return this;
  }


});
module.exports = ListView;
