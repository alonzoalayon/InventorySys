var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var ArenaDashboardView = require('../views/ArenaDashboardView');
var ContentView = require('../views/ContentView');
var AppRouter = Backbone.Router.extend({
      routes: {
          '': 'homeRoute',
          'home': 'homeRoute',
          'about': 'aboutRoute',
      },
      homeRoute: function () {
        var homeView = new ContentView();

          $("#content").html(homeView.el);
      },
      aboutRoute: function () {
          var aboutView = new ArenaDashboardView();
          $("#content").html(aboutView.el);
      }
  });
  module.exports=AppRouter;
