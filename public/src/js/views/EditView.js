var Backbone = require('backbone');
var _ = require('underscore');
var ComputerModel = require('../models/ComputerModel');
var ComputerCollection = require('../collections/ComputerCollection');
var EditView = Backbone.View.extend({
  // this is the wrapper for your view, div is default. It's what is inside that "counts"
  el: '<div></div>',

  // this is what is inserted inside your el, and what your view cares about
  // you see here I'm passing in a variable called task
  template: _.template('\
    <ul>\
      <% computers.each(function(task) { %>\
        <li><%= task.get("computer_id") %></li>\
      <% }) %>\
    </ul>\
  '),
  initialize: function() {

      this.render();
  },
  render: function() {
    // this is where your business logic goes.
    // it usually starts with...
    this.$el.html(this.template(this.model.toJSON()));
    // this will stick the template inside of the el
    // you can pass variables into your template


    // and ends with
    return this;
  }
});
module.exports = EditView;
