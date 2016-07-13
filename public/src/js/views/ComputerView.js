var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
//var TableListView = require('./TableListView');
var TableItemView = Backbone.View.extend({
    el: '<tr></tr>',

    template: _.template('\
    <%= computer.get("computer_id") %>\
    <%= computer.get("computer_owner") %>\
    <%= computer.get("computer_description") %>\
    <%= computer.get("computer_department") %>\
  '),
    render: function() {
      //e.preventDefault();
      //event && event.preventDefault();
        $(this.el).html(this.template({computer: this.model}));
        return this;
    }
});

var TableListView = Backbone.View.extend({
    el: '<td></td>',
    initialize: function(){
      //listens to update even from collection and calls this.render
      this.listenTo(this.collection, "update", this.render)
      //this.listenTo(this.model, "remove", this.remove)
    },

    render: function() {
      //console.log(this.collection.length);
      //console.log(basura.like);
        var that = this;
        // be sure to reset the container el, because if you re-render for any reason, you'll just keep adding to it
        $(this.el).html('');

        this.collection.each(function(computer) {
            var tableItemView = new TableItemView({
                model: computer
            });
            $(that.el).append(tableItemView.render().el);
            //this.$el.html(this.template(this.model.toJSON()));
        });

        return this;
    }
});
