var Backbone = require('backbone');
var _ = require('underscore');
var ComputerModel = require('../models/ComputerModel');
var ComputerCollection = require('../collections/ComputerCollection');
var FormView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <div class="container">\
    <div class="row">\
        <h1 align="center" class="page-header" style="font-family: \'Cantarell\', sans-serif; background-color: #FFBF46;border: 5px solid #FBFBFF ;">Invent Story System</h1>\
        <h1 align="center" class="page-header" style="font-family: \'Cantarell\', sans-serif; background-color: #E63B2E;border: 5px solid #FBFBFF ;">IT</h1>\
    <div class="col-lg-3 col-md-6">\
      <form method="post" action="/computers">\
      <div class="form-group">\
        <label for="exampleInputName">Computer ID</label>\
        <div class="input-group">\
        <div class="input-group-addon"><i class="fa fa-hashtag" aria-hidden="true"></i></div>\
        <input type="text" class="form-control" name="computer_id" tabindex="1" id="name" placeholder="01">\
          </div>\
      </div>\
      <div class="form-group">\
      <label for="exampleCategory">Please select a user.</label>\
      <div class="input-group">\
          <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></div>\
          <select class="form-control" name="computer_owner" id="category" tabindex="3">\
          <% computers.each(function(users) { %>\
              <option value="<%= users.get("first_name")%>"><%= users.get("first_name") %></option>\
          <% }); %>\
    </select>\
      </div>\
      </div>\
      <div class="form-group">\
        <label for="exampleInputEmail">Computer Description</label>\
        <div class="input-group">\
          <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></div>\
          <input type="text" class="form-control" name ="computer_description" tabindex="2" id="email" placeholder="Dell">\
      </div>\
      </div>\
     <div class="form-group">\
     <label for="exampleCategory">Please select a department.</label>\
     <div class="input-group">\
         <div class="input-group-addon"><span class="glyphicon glyphicon-th-list"></span></div>\
         <select class="form-control" name="computer_department" id="category" tabindex="3">\
         <% computers.each(function(departments) { %>\
             <option value="<%= computer.get("departments") %>"><%= computer.get("departments") %></option>\
         <% }); %>\
    </select>\
     </div>\
     </div>\
      <button type="submit" id="submitButton" class="btn btn-primary" tabindex="6">Submit</button>\
    </form>\
    </div>\
    </div>\
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
        $(this.el).html(this.template({computers: this.collection}));

        // this will stick the template inside of the el
        return this;
    }
});


module.exports = FormView;
