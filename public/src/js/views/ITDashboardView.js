
var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var FormView = require('./FormView');
var EditView = require('./EditView');
var ListView = require('./ListView');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
var TableListView = require('./TableListView');
var ContentView = require('./ContentView');
var ArenaDashboardView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <div class="container">\
    <div class="row">\
        <a href="#home"><h1 align="center" class="page-header home" style="font-family: \'Cantarell\', sans-serif; background-color: #FFBF46;border: 5px solid #FBFBFF ;">Invent Story System</h1></a>\
        <h1 align="center" class="page-header" style="font-family: \'Cantarell\', sans-serif; background-color: #E63B2E;border: 5px solid #FBFBFF ;">IT</h1>\
    <div class="col-lg-3 col-md-6">\
        <div class="panel panel-danger">\
            <div class="panel-heading">\
                <div class="row">\
                    <div class="col-xs-3">\
                        <i class="fa fa-wifi fa-5x"></i>\
                    </div>\
                    <div class="col-xs-9 text-right">\
                        <div class="huge"></div>\
                        <div></div>\
                    </div>\
                </div>\
            </div>\
            <a href="#it/view" class="viewComputers">\
                <div class="panel-footer">\
                <div class="clearfix">\
                    <span class="pull-left" style="color: #A94442;">View Hotspots</span>\
                    <span class="pull-right" style="color: #A94442;"><i class="fa fa-2x fa-arrow-circle-right"></i></span>\
                    <div class="clearfix"></div>\
                </div>\
                  </div>\
            </a>\
            <a href="#" class="addComputers">\
                <div class="panel-footer">\
                <span class="pull-left" style="color: #A94442;">Add Hotspots</span>\
                <span class="pull-right" style="color: #A94442;"><i class="fa fa-2x fa-plus-circle"></i></span>\
                    <div class="clearfix"></div>\
                </div>\
            </a>\
        </div>\
    </div>\
        <div class="col-lg-3 col-md-6">\
            <div class="panel panel-primary">\
                <div class="panel-heading">\
                    <div class="row">\
                        <div class="col-xs-3">\
                            <i class="fa fa-desktop fa-5x"></i>\
                        </div>\
                        <div class="col-xs-9 text-right">\
                            <div class="huge"></div>\
                            <div></div>\
                        </div>\
                    </div>\
                </div>\
                <a href="#" class="viewComputers">\
                    <div class="panel-footer">\
                    <div class="clearfix">\
                        <span class="pull-left" style="color: #337ab7;">View Computers</span>\
                        <span class="pull-right" style="color: #337ab7;"><i class="fa fa-2x fa-arrow-circle-right"></i></span>\
                        <div class="clearfix"></div>\
                    </div>\
                      </div>\
                </a>\
                <a href="#" class="addComputers">\
                    <div class="panel-footer">\
                    <span class="pull-left" style="color: #337ab7;">Add Computers</span>\
                    <span class="pull-right" style="color: #337ab7;"><i class="fa fa-2x fa-plus-circle"></i></span>\
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
                            <div class="huge"></div>\
                            <div></div>\
                        </div>\
                    </div>\
                </div>\
                <a href="#">\
                    <div class="panel-footer">\
                        <span class="pull-left" style="color: #37c63d;">View Printers</span>\
                        <span class="pull-right" style="color: #37c63d;"><i class="fa fa-2x fa-arrow-circle-right"></i></span>\
                        <div class="clearfix"></div>\
                    </div>\
                </a>\
                <a href="#">\
                    <div class="panel-footer">\
                    <span class="pull-left" style="color: #37c63d;">Add Printers</span>\
                    <span class="pull-right" style="color: #37c63d;"><i class="fa fa-2x fa-plus-circle"></i></span>\
                        <div class="clearfix"></div>\
                    </div>\
                </a>\
            </div>\
        </div>\
    </div>\
    </div>\
  '),
    initialize: function() {
        this.render();
    },
    events:{
      'click .viewComputers': 'handleViewComputer',
      'click .addComputers': 'handleAddComputer',
      'click .hamburger' : 'handleHamburger',
      'click .home' : 'handleHome'
    },
    handleAddComputer: function(){
      var computers = new ComputerCollection();

      computers.fetch();
      //var computers = new ComputerModel();
      //console.log(computers);
      var formView = new FormView({
          collection: computers
      });
      formView.render();
      $('#page-content-wrapper').html(formView.el);
    },
    /*handleViewComputer: function(){
      var computers = new ComputerCollection();
      computers.fetch();
      //console.log(tasks);
      var tableListView = new TableListView({
          collection: computers
      });

      //var tasks = new FormView({collection: tasks});
      //$('#form').html(formView.el);
      $("#page-content-wrapper").html(tableListView.render().el);
    },*/

    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template({}));
        // this will stick the template inside of the el
        return this;
    }
});
//var formView = new FormView({ el: $("#form") });

module.exports = ArenaDashboardView;
