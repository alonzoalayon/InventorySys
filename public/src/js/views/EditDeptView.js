var Backbone = require('backbone');
var _ = require('underscore');
var DepartmentsModel = require('../models/DepartmentsModel');
var DepartmentsCollection = require('../collections/DepartmentsCollection');
var EditDeptView = Backbone.View.extend({
    el: '<div></div>',
    initialize: function(){
      //listens to update even from collection and calls this.render
      this.listenTo(this.collection, "change", this.render)
      //this.listenTo(this.model, "remove", this.remove)
    },
    template: _.template('\
    <form>\
    <div class="form-group">\
    <label for="exampleCategory">Edit Department</label>\
    <div class="input-group">\
        <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>\
    <input type="text" class="form-control" name="departments" tabindex="1" id="input" value="<%= departments %>"placeholder="Name">\
    </div>\
    </div>\
  <button type="submit" id="submitEdit" class="btn btn-primary save" tabindex="6">Submit</button>\
  </form>\
  '),
  events:{
    'click #submitEdit': 'handleSave'
  },
  handleSave: function(){
    this.model.get('departments');
    console.log(this.model);
    var departments = $('#input').val();
    this.model.set('departments', departments);
    this.model.save('departments', departments);
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
module.exports = EditDeptView;
