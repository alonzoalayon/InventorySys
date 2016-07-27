var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
//var FormView = require('./FormView');
var EditUserView = require('./EditUserView');
var Computer_UserCollection = require('../collections/Computer_UserCollection');
var Computer_UserModel = require('../models/Computer_UserModel');
//var TableListView = require('./TableListView');
var UserItemView = Backbone.View.extend({
    el: '<tr></tr>',

    template: _.template('\
    <td><%= computer_user.get("first_name") %></td>\
    <td><%= computer_user.get("last_name") %></td>\
    <td><button class="btn btn-success href="" id="editComputer">Edit Computer</button></td>\
    <td><button class="btn btn-danger href="" id="destroyComputer">Delete Computer</button></td>\
  '),
  events: {
    'click #editComputer': "handleUpdate",
    'click #destroyComputer': 'handleDestroyComputer'
  },
  handleUpdate: function(){
    this.model.get('');
    console.log(this.model);
    var editView = new EditUserView({
      model: this.model
   });

    editView.render();
    $('#content').html(editView.el);
  },
  handleDestroyComputer: function(){
    //this.model.get('computer');
    //.log(this.model);
    this.model.destroy();
  },
    render: function() {
      //e.preventDefault();
      //event && event.preventDefault();
        $(this.el).html(this.template({computer_user: this.model}));
        return this;
    }
});
module.exports = UserItemView;
