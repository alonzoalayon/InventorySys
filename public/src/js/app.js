window.$ = window.jQuery = require('jquery');
var bootstrap = require('bootstrap');
var Backbone = require('backbone');
//var ComputerCollection = require('./collections/ComputerCollection')
//var DashboardView = require('./views/DashboardView.js');
var MenuView = require('./views/MenuView.js');
var TabsView = require('./views/TabsView.js');
var ComputerUsersView = require('./views/ComputerUsersView.js');
var ContentView = require('./views/ContentView.js');
var AppRouter = require('./routes/AppRouter.js');
//var Router = require('..../routes/Router.js');
window.appRouter = new AppRouter();
 //Backbone.history.start();
//var RouteMenu = require('./views/RouteMenu.js')
//var TableListView = require('./views/TableListView.js');
//var ComputerModel = require('./models/ComputerModel.js');
var menuView = new MenuView();
var computerView = new ComputerUsersView();
//var dashboardView = new DashboardView();
//'routemenu' is an instance of the view class
       //var routemenu = new RouteMenu();

       //It start listening to the routes and manages the history for bookmarkable URL's
       //Backbone.history.start();

//var computerModel = new ComputerModel();
//var computerView = new ComputerView({collection: computerCollection});
//var computerCollection = new ComputerCollection();
//computerCollection.fetch();
//computerModel.get('computer_id');
//this.model.get('computer_id');

//menuView.render();

//computerView.render();
//contentView.render();
//dashboardView.render();

//$('#content').html(contentView.el);
Backbone.history.start();
//$('#wrapper').html(menuView.el);

//$('#printersInventory').html(computerView.el);
//$('#wrapper').html(menuView.el);
//$('#page-content-wrapper').append(contentView.el);
//computerView.render();
//var computerCollection = new LitterCollection();
//computerCollection.fetch();
//console.log(computerCollection);

//$("#form").html(tableListView.render().el);
