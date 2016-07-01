var Backbone = require('backbone');
var _ = require('underscore');
var TableItemView = ('./TableItemView');
var ComputerModel = ('./ComputerModel');
)
var TableListView = Backbone.View.extend({
    el: '<ul class="list-group"></ul>',
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

        this.collection.each(function(basura) {
            //var tableItemView = new TableItemView({model: computer});
            var computerModel = new ComputerModel();
            var tableItemView = new TableItemView(model: computerModel);
            $(that.el).append(tableItemView.render().el);
            //this.$el.html(this.template(this.model.toJSON()));
        });

        return this;
    }
});
module.exports = TableListView;
