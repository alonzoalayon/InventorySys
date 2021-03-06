var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');
var ArenaDashboardView = require('../views/ArenaDashboardView');
var ITDashboardView = require('../views/ITDashboardView');
var ContentView = require('../views/ContentView');
var TableListView = require('../views/TableListView');
var ComputerCollection = require('../collections/ComputerCollection');
var Computer_UserCollection = require('../collections/Computer_UserCollection');
var Computer_UserModel = require('../models/Computer_UserModel');
var AdminView = require('../views/AdminView');
var NewUser = require('../views/NewUser');
var Add_Dept_View = require('../views/Add_Dept_View');
var TableUserView = require('../views/TableUserView');
var DepartmentsModel = require('../models/DepartmentsModel');
var DepartmentsCollection = require('../collections/DepartmentsCollection');
var DepartmentTableView = require('../views/DepartmentTableView');
var AppRouter = Backbone.Router.extend({
      routes: {
          '': 'homeRoute',
          'home': 'homeRoute',
          'admin': 'adminRoute',
          'admin/add':'adminAddRoute',
          'admin/add_dept':'adminAddDeptRoute',
          'arena': 'arenaRoute',
          'it' : 'itRoute',
          'it/view' : 'viewCompRoute'
      },
      homeRoute: function () {
        var homeView = new ContentView();
          $("#content").html(homeView.el);
      },
      adminRoute: function () {
        var adminView = new AdminView();
          $("#content").html(adminView.el);
      },
      adminAddRoute: function () {
        var users = new Computer_UserCollection();
        var computer_user = new Computer_UserModel();
        users.fetch();
        var tableUserView = new TableUserView({model:computer_user,
            collection: users
        });

        var newUser = new NewUser();
        newUser.render();

          $("#content").html(tableUserView.el);
          $("#content").append(newUser.el);
      },
      adminAddDeptRoute: function(){
        var departmentsCollection = new DepartmentsCollection();
        //var departments = new DepartmentsModel();
        var add_dept_view = new Add_Dept_View();
        departmentsCollection.fetch();
        var depttableView = new DepartmentTableView({collection: departmentsCollection});

        add_dept_view.render();
        $('#content').html(depttableView.render().el);
        $("#content").append(add_dept_view.el);
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
