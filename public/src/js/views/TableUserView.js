var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var UserItemView = require('./UserItemView');
var TableUserView = Backbone.View.extend({
    el: '<table class="display table table-condensed table-responsive table-striped table-bordered"></table>',
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

        this.collection.each(function(computer_user) {
            var userItemView = new UserItemView({
                model: computer_user
            });
            $(that.el).append(userItemView.render().el);
            //this.$el.html(this.template(this.model.toJSON()));
        });

        return this;
    }
});
module.exports = TableUserView
