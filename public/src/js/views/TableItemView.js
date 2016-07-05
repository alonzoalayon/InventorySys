var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var FormView = require('./FormView');
var EditView = require('./EditView');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
//var TableListView = require('./TableListView');
var TableItemView = Backbone.View.extend({
    el: '<tr></tr>',

    template: _.template('\
    <td><%= computer.get("computer_id") %></td>\
    <td><%= computer.get("computer_owner") %></td>\
    <td><%= computer.get("computer_description") %></td>\
    <td><%= computer.get("computer_department") %></td>\
    <td><button class="btn btn-success href="" id="editComputer">Edit Computer</button></td>\
    <td><button class="btn btn-danger href="" id="destroyComputer">Delete Computer</button></td>\
  '),
  events: {
    'click #editComputer': "handleUpdate",
    'click #destroyComputer': 'handleDestroyComputer'
  },
  handleUpdate: function(){
    this.model.get('computer');
    console.log(this.model);
    var editView = new EditView({
      model: this.model
   });

    editView.render();
    $('#form').html(editView.el);
  },
  handleDestroyComputer: function(){
    //this.model.get('computer');
    //.log(this.model);
    this.model.destroy();
  },
    render: function() {
      //e.preventDefault();
      //event && event.preventDefault();
        $(this.el).html(this.template({computer: this.model}));
        return this;
    }
});
module.exports = TableItemView;
