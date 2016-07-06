var Backbone = require('backbone');
var _ = require('underscore');
var ComputerModel = require('../models/ComputerModel');
var ComputerCollection = require('../collections/ComputerCollection');
var EditView = Backbone.View.extend({
    el: '<div></div>',
    initialize: function(){
      //listens to update even from collection and calls this.render
      this.listenTo(this.collection, "update", this.render)
      //this.listenTo(this.model, "remove", this.remove)
    },
    template: _.template('\
    <form action="#">\
    <div class="form-group">\
      <label for="exampleInputName">Computer ID</label>\
      <div class="input-group">\
      <div class="input-group-addon"><i class="fa fa-arrow-circle-right"></i></div>\
      <input type="text" class="form-control" name="computer_id" tabindex="1" id="name" placeholder="Name">\
        </div>\
    </div>\
    <div class="form-group">\
    <label for="exampleCategory">Please select a user.</label>\
    <div class="input-group">\
        <div class="input-group-addon"><span class="glyphicon glyphicon-th-list"></span></div>\
    <input type="text" class="form-control" name="computer_owner" tabindex="1" id="input" value="<%= computer_owner %>"placeholder="Name">\
    </div>\
    </div>\
    <div class="form-group">\
      <label for="exampleInputEmail">Description</label>\
      <div class="input-group">\
        <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></div>\
        <input type="email" class="form-control" name ="computer_description" tabindex="2" id="email" placeholder="Email">\
    </div>\
    </div>\
      <div class="form-group">\
          <div class="input-group">\
          <div class="input-group-addon"><span class="glyphicon glyphicon-pencil"></span></div>\
      <textarea class="form-control" id="message" rows="3" tabindex="5"></textarea>\
      </div>\
      </div>\
      <div class="form-group">\
      <label for="exampleInputFile">File input</label>\
      <input type="file" id="uploaded_file" name="uploaded_file">\
      <p class="help-block">Example block-level help text here.</p>\
    </div>\
    <button type="submit" id="submitButton" class="btn btn-primary save" tabindex="6">Submit</button>\
  </form>\
  '),
  events:{
    'click .save': 'handleSave'
  },
  handleSave: function(){
    //this.model.get('basura');
    var input = $('#input').val();
    this.model.set('computer_owner', input);
    this.model.save('computer_owner', input);
    console.log(input);
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
module.exports = EditView;
