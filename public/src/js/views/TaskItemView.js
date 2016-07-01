var Backbone = require('backbone');
var _ = require('underscore');
var ComputerModel = require('./models/ComputerModel');
var TaskItemView = Backbone.View.extend({
    el: '<li class="list-group-item" style="border: 17px solid #286090; border-top: 20px solid bisque;"></br></li>',

    template: _.template('\
    <%= Computer.get("computer_id") %>&nbsp;&nbsp;&nbsp;\
    <img class="like faa-bounce animated-hover" src="../images/png/like.png" style="height:20px;" faa-bounce animated>\
    <span class="me_gusta"></span>&nbsp;&nbsp;&nbsp;\
    <img class="update faa-pulse animated-hover" src="../images/png/edit.png" style="height:20px;">&nbsp;&nbsp;&nbsp;\
    <img class="destroy faa-flash animated-hover" src="../images/png/error.png" style="height:20px;">\
  '),
  events: {
    'click .destroy': 'handleDestroy',
    'click .update' : 'handleUpdate',
    'click .like' : 'handleLike',
    'click .save' : 'handleSave'
  },
  handleDestroy: function(){
    this.model.destroy();
  },
  handleUpdate: function(){
    this.model.get('basura');
    console.log(this.model);
    var editView = new EditView({
      model: this.model
   });


     //var editView = new EditView({model: this.model});
    editView.render();
    $('#form').html(editView.el);


    //editView.render();
    //$('#form').html(editView.el)
  },
  handleLike: function(){
    //event && event.preventDefault();
    var likes = this.model.get('like') // this will be a Number
    if(likes == 0 || likes == null){
      this.model.set('like', 1);
    }
    else{
      this.model.set('like', likes + 1);
    }

this.model.save();
this.render();
  },
    render: function() {
      //e.preventDefault();
      //event && event.preventDefault();
        $(this.el).html(this.template({computer: this.model}));
        return this;
    }
});
module.exports = TaskItemView;
