var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var ArenaDashboardView = require('../views/ArenaDashboardView');
var ITDashboardView = require('../views/ITDashboardView');
var ContentView = require('../views/ContentView');
var TableListView = require('../views/TableListView');
var ComputerCollection = require('../collections/ComputerCollection')
var AppRouter = Backbone.Router.extend({
      routes: {
          '': 'homeRoute',
          'home': 'homeRoute',
          'arena': 'arenaRoute',
          'it' : 'itRoute',
          'it/view' : 'viewCompRoute'
      },
      homeRoute: function () {
        var homeView = new ContentView();
          $("#content").html(homeView.el);
      },
      arenaRoute: function () {
          var aboutView = new ArenaDashboardView();
          $("#content").html(aboutView.el);
      },
      itRoute: function(){
        var itdashboardView = new ITDashboardView();
        $('#content').html(itdashboardView.el);
      },
      storeRoute: function(){

        //$('#content').html(itdashboardView.el);
      },
      viewCompRoute: function(){
        var computers = new ComputerCollection();
        computers.fetch();
        //console.log(tasks);
        var tableListView = new TableListView({
            collection: computers
        });

        //var tasks = new FormView({collection: tasks});
        //$('#form').html(formView.el);
        $("#content").html(tableListView.render().el);
      }
  });
  module.exports=AppRouter;
