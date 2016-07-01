var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
var ComputerView = Backbone.View.extend({
    //...

    // this is the wrapper for your view, div is default. It's what is inside that "counts"
    el: '<div></div>',
    // this is what is inserted inside your el, and what your view cares about
    // you see here I'm passing in a variable called task
    template: _.template('<ul id="parentUL">\
      <% computers.each(function(soda) { %>\
        <li data-value=""><%= soda.get("computer_id") %></li>\
      <% }) %>\
    </ul>\
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
        $(this.el).html(this.template({
            sodas: this.collection
        }));
        // this will stick the template inside of the el
        return this;
    }
});
var sodas = new ComputerCollection();
sodas.fetch();
var sodasView = new ComputerView({
    collection: sodas
});
//sodasView.render();
//making instances
//make new collection

module.exports = ComputerView;
