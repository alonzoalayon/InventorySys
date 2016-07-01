var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
var ComputerView = Backbone.View.extend({
    //...

    // this is the wrapper for your view, div is default. It's what is inside that "counts"
    el: '<table></table>',
    // this is what is inserted inside your el, and what your view cares about
    // you see here I'm passing in a variable called task
    template: _.template('<td>\
      <%computers.each(function(soda) { %>\
        <tr data-value=""><%= soda.get("computer_id") %></tr>\
      <% }) %>\
    </td>\
  '),

    initialize: function() {
        // `this` is referring to the current view instance
        //this.listenTo(this.collection, 'update', this.render);
        this.render();
        // stick the template inside the el by calling render
        //sodasView.render();
        // insert the el element (with the rendered template inside) onto the DOM
        //$("#hello").html(sodasView.render().el);
    },

    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        this.$el.html(this.template());
        return this;

    }
});


module.exports = ComputerView;
