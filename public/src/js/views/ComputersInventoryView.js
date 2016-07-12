var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var FormView = require('./FormView');
var EditView = require('./EditView');
var ListView = require('./ListView');
var ComputerCollection = require('../collections/ComputerCollection');
var ComputerModel = require('../models/ComputerModel');
var TableListView = require('./TableListView');
var ComputersInventoryView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <div class="container">\
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
        <a href="#" class="viewComputers">\
            <div class="panel-footer">\
            <div class="clearfix">\
                <span class="pull-left">View Computers</span>\
                <span class="pull-right"><i class="fa fa-2x fa-arrow-circle-right"></i></span>\
                <div class="clearfix"></div>\
            </div>\
              </div>\
        </a>\
        <a href="#" class="addComputers">\
            <div class="panel-footer">\
            <span class="pull-left">Add Computers</span>\
            <span class="pull-right"><i class="fa fa-2x fa-plus-circle"></i></span>\
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
    events: {
        'click .viewComputers': 'handleViewComputer',
        'click .addComputers': 'handleAddComputer'
    },
    handleAddComputer: function() {
        var computers = new ComputerCollection();
        computers.fetch();
        //var computers = new ComputerModel();
        //console.log(computers);
        var formView = new FormView({
            collection: computers
        });
        formView.render();
        $('#form').html(formView.el);
    },
    handleViewComputer: function() {
        var computers = new ComputerCollection();
        computers.fetch();
        //console.log(tasks);
        var tableListView = new TableListView({
            collection: computers
        });

        //var tasks = new FormView({collection: tasks});
        //$('#form').html(formView.el);
        $("#form").html(tableListView.render().el);
    },

    render: function() {
      var that = this;
      // be sure to reset the container el, because if you re-render for any reason, you'll just keep adding to it
      $(this.el).html('');
        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template({}));
        // this will stick the template inside of the el
        return this;
    }
});
//var formView = new FormView({ el: $("#form") });

module.exports = ComputersInventoryView;
