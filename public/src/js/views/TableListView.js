var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var TableItemView = require('./TableItemView');
var TableListView = Backbone.View.extend({
    el: '<table></table>',
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
module.exports = TableListView
