var Backbone = require('backbone');
var _ = require('underscore');
var Add_Dept_View = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <div class="container">\
    <div class="row">\
    <div class="col-lg-3 col-md-6">\
      <form method="post" action="/departments">\
      <div class="form-group">\
        <label for="exampleInputName">Department</label>\
        <div class="input-group">\
        <div class="input-group-addon"><i class="fa fa-hashtag" aria-hidden="true"></i></div>\
        <input type="text" class="form-control" name="departments" tabindex="1" id="name" placeholder="Tech">\
          </div>\
      </div>\
      <button type="submit" id="submitButton" class="btn btn-primary" tabindex="6">Submit</button>\
    </form>\
    </div>\
    </div>\
    </div>\
  '),
    initialize: function() {
        this.listenTo(this.collection, 'update', this.render);
    },

    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        //this.collection.toJSON({computers: this.collection});
        $(this.el).html(this.template({computer_user: this.collection}));

        // this will stick the template inside of the el
        return this;
    }
});


module.exports = Add_Dept_View;
