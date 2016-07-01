var Backbone = require('backbone');
var _ = require('underscore');
var ComputerModel = require('../models/ComputerModel');
var ComputerCollection = require('../collections/ComputerCollection');
var ItemView = Backbone.View.extend({
  el: '<li></li>',

  template: _.template('computers.get("computer_id")'),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },

  render: function() {
    $(this.el).html(this.template({ computers: this.model }));
    return this;
  }

  // and at the end we want to be sure to say what this "module exports"


});
module.exports = ItemView;
