var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var Computer_UserModel = require('../models/Computer_UserModel');
var Computer_UserCollection = require('../collections/Computer_UserCollection');
var NewUser = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <div class="container">\
    <div class="row">\
    <div class="col-lg-3 col-md-6">\
      <form method="post" action="/computer_user">\
      <div class="form-group">\
        <label for="exampleInputName">First Name</label>\
        <div class="input-group">\
        <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>\
        <input type="text" class="form-control" name="first_name" tabindex="1" id="name" placeholder="Joe">\
          </div>\
      </div>\
      <div class="form-group">\
        <label for="exampleInputEmail">Last Name</label>\
        <div class="input-group">\
          <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>\
          <input type="text" class="form-control" name ="last_name" tabindex="2" id="email" placeholder="Smith">\
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
        $(this.el).html(this.template({users: this.collection}));
        //$(this.el).html(this.template(this.collection.toJSON()));
        //$(this.el).html(this.template(this.model.toJSON()));
        // this will stick the template inside of the el
        return this;
    }
});


module.exports = NewUser;
