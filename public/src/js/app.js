window.$ = window.jQuery = require('jquery');
var bootstrap = require('bootstrap');
//var ComputerCollection = require('./collections/ComputerCollection')
//var DashboardView = require('./views/DashboardView.js');
var MenuView = require('./views/MenuView.js');
var TabsView = require('./views/TabsView.js');
var ComputerUsersView = require('./views/ComputerUsersView.js');
var ContentView = require('./views/ContentView.js');
//var TableListView = require('./views/TableListView.js');
//var ComputerModel = require('./models/ComputerModel.js');
var menuView = new MenuView();
var computerView = new ComputerUsersView();
//var dashboardView = new DashboardView();

var contentView = new ContentView();
//var computerModel = new ComputerModel();
//var computerView = new ComputerView({collection: computerCollection});
//var computerCollection = new ComputerCollection();
//computerCollection.fetch();
//computerModel.get('computer_id');
//this.model.get('computer_id');
menuView.render();

//computerView.render();
contentView.render();
//dashboardView.render();

//$('#content').html(dashboardView.el);
//$('#wrapper').html(menuView.el);

//$('#printersInventory').html(computerView.el);
//$('#wrapper').html(menuView.el);
$('#page-content-wrapper').append(contentView.el);
//computerView.render();
//var computerCollection = new LitterCollection();
//computerCollection.fetch();
//console.log(computerCollection);

//$("#form").html(tableListView.render().el);
