var Backbone = require('backbone');
var _ = require('underscore');
var Computer_UserModel = require('../models/Computer_UserModel');
var Computer_UserCollection = require('../collections/Computer_UserCollection');
var EditUserView = Backbone.View.extend({
    el: '<div></div>',
    initialize: function(){
      //listens to update even from collection and calls this.render
      this.listenTo(this.collection, "update", this.render)
      //this.listenTo(this.model, "remove", this.remove)
    },
    template: _.template('\
    <form action="#">\
    <div class="form-group">\
    <label for="exampleCategory">Please select a user.</label>\
    <div class="input-group">\
        <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>\
    <input type="text" class="form-control" name="first_name" tabindex="1" id="input" value="<%= first_name %>"placeholder="Name">\
    </div>\
    </div>\
    <div class="form-group">\
      <label for="exampleInputName">Computer ID</label>\
      <div class="input-group">\
      <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>\
      <input type="text" class="form-control" name="last_name" tabindex="1" id="name" value="<%= last_name %>" placeholder="Name">\
        </div>\
    </div>\
    <button type="submit" id="submitButton" class="btn btn-primary save" tabindex="6">Submit</button>\
  </form>\
  '),
  events:{
    'click .save': 'handleSave'
  },
  handleSave: function(){
    //this.model.get('basura');
    var first_name = $('#input').val();
    var last_name = $('#name').val();
    this.model.set('first_name', first_name);
    this.model.set('last_name', last_name)
    this.model.save('first_name', first_name);
    this.model.save('last_name', last_name);
    //console.log(input);
    //formView = new FormView();
    //$('#form').html(formView.el);
  },
    initialize: function() {
        this.render();
    },

    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template(this.model.toJSON()));
        // this will stick the template inside of the el
        return this;
    }
});
module.exports = EditUserView;
