var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var DepartmentItemView = require('./DepartmentItemView');
var DepartmentTableView = Backbone.View.extend({
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

        this.collection.each(function(departments) {
            var deptitemView = new DepartmentItemView({
                model: departments
            });
            $(that.el).append(deptitemView.render().el);
            //this.$el.html(this.template(this.model.toJSON()));
        });

        return this;
    }
});
module.exports = DepartmentTableView;
