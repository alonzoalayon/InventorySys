var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var FormView = require('./FormView');
var EditView = require('./EditView');
var ListView = require('./ListView');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
var DashboardView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <div class="row">\
        <div class="col-lg-3 col-md-6">\
            <div class="panel panel-primary">\
                <div class="panel-heading">\
                    <div class="row">\
                        <div class="col-xs-3">\
                            <i class="fa fa-desktop fa-5x"></i>\
                        </div>\
                        <div class="col-xs-9 text-right">\
                            <div class="huge">26</div>\
                            <div>New Comments!</div>\
                        </div>\
                    </div>\
                </div>\
                <a href="#">\
                    <div class="panel-footer">\
                        <span id="viewForm" class="pull-left">View Details</span>\
                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>\
                        <div class="clearfix"></div>\
                    </div>\
                </a>\
            </div>\
        </div>\
        <div class="col-lg-3 col-md-6">\
            <div class="panel panel-success">\
                <div class="panel-heading">\
                    <div class="row">\
                        <div class="col-xs-3">\
                            <i class="fa fa-print fa-5x"></i>\
                        </div>\
                        <div class="col-xs-9 text-right">\
                            <div class="huge">12</div>\
                            <div>New Tasks!</div>\
                        </div>\
                    </div>\
                </div>\
                <a href="#">\
                    <div class="panel-footer">\
                        <span id="editComputer" class="pull-left">View Details</span>\
                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>\
                        <div class="clearfix"></div>\
                    </div>\
                </a>\
            </div>\
        </div>\
        <div class="col-lg-3 col-md-6">\
            <div class="panel panel-warning">\
                <div class="panel-heading">\
                    <div class="row">\
                        <div class="col-xs-3">\
                            <i class="fa fa-shopping-television fa-5x"></i>\
                        </div>\
                        <div class="col-xs-9 text-right">\
                            <div class="huge">124</div>\
                            <div>New Orders!</div>\
                        </div>\
                    </div>\
                </div>\
                <a href="#">\
                    <div class="panel-footer">\
                        <span class="pull-left">View Details</span>\
                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>\
                        <div class="clearfix"></div>\
                    </div>\
                </a>\
            </div>\
        </div>\
        <div class="col-lg-3 col-md-6">\
            <div class="panel panel-danger">\
                <div class="panel-heading">\
                    <div class="row">\
                        <div class="col-xs-3">\
                            <i class="fa fa-support fa-5x"></i>\
                        </div>\
                        <div class="col-xs-9 text-right">\
                            <div class="huge">13</div>\
                            <div>Support Tickets!</div>\
                        </div>\
                    </div>\
                </div>\
                <a href="#">\
                    <div class="panel-footer">\
                        <span class="pull-left">View Details</span>\
                        <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>\
                        <div class="clearfix"></div>\
                    </div>\
                </a>\
            </div>\
        </div>\
    </div>\
  '),
    initialize: function() {
        this.render();
    },
    events:{
      'click #viewForm': 'handleView',
      'click #editComputer' : "handleEditComputer"
    },
    handleView: function(){
      var formView = new FormView();
      //var editView = new EditView();
      //var tasksListView = new TasksListView();

      //var sodasView = new SodasView({
          //collection: sodas
      //});

      formView.render();

      //sodasView.render();
      $('#form').html(formView.el);
    },
    handleEditComputer: function(){
      var computers = new ComputerCollection();
      computers.fetch();
      //computerModel.get('computer_id');
      console.log(this.model);
      var editView = new EditView({
        model: this.model
     });
      editView.render();

      //sodasView.render();
      $('#form').html(editView.el);
    },
    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template({}));
        // this will stick the template inside of the el
        return this;
    }
});
//var formView = new FormView({ el: $("#form") });

module.exports = DashboardView;
