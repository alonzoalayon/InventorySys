var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var FormView = require('./FormView');
var EditView = require('./EditView');
var ListView = require('./ListView');
var ComputerUsersView = require('./ComputerUsersView');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
//var bootstrap = require('boostrap');
//var TableListView = require('./TableListView');
var TabsView = Backbone.View.extend({
    el: '<div></div>',
    template: _.template('\
    <ul class="nav nav-tabs  nav-justified">\
      <li class="active"><a data-toggle="tab" href="#menu1">Computers</a></li>\
      <li><a data-toggle="tab" href="#menu2">Printers</a></li>\
      <li><a data-toggle="tab" href="#menu3">asfd</a></li>\
    </ul>\
    <div class="tab-content">\
      <div id="menu1" class="tab-pane fade in active">\
        <h3>Computers</h3>\
        <div id="computersInventory"></div>\
      </div>\
      <div id="menu2" class="tab-pane fade">\
        <h3>Printers</h3>\
        <div id="printersInventory"></div>\
      </div>\
      <div id="menu3" class="tab-pane fade">\
        <h3>asdf</h3>\
        <div id="printersInventory"></div>\
      </div>\
    </div>\
  '),
    initialize: function() {
        this.render();
    },


    render: function() {

        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template({}));
        // this will stick the template inside of the el
        return this;
    }
});
//var formView = new FormView({ el: $("#form") });

module.exports = TabsView;
