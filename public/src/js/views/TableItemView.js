var Backbone = require('backbone');
var _ = require('underscore');
var ComputerModel = require('./models/ComputerModel');
var TableItemView = Backbone.View.extend({
    el: '<li class="list-group-item" style="border: 17px solid #286090; border-top: 20px solid bisque;"></br></li>',

    template: _.template('\
    <%= basura.get("basura") %>&nbsp;&nbsp;&nbsp;\
    <img class="like faa-bounce animated-hover" src="../images/png/like.png" style="height:20px;" faa-bounce animated>\
    <span class="me_gusta"><%= basura.get("like") %></span>&nbsp;&nbsp;&nbsp;\
    <img class="update faa-pulse animated-hover" src="../images/png/edit.png" style="height:20px;">&nbsp;&nbsp;&nbsp;\
    <img class="destroy faa-flash animated-hover" src="../images/png/error.png" style="height:20px;">\
  '),
    render: function() {
      //e.preventDefault();
      //event && event.preventDefault();
        $(this.el).html(this.template({basura: this.model}));
        return this;
    }
});
module.exports = TableItemView;
