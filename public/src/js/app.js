window.$ = window.jQuery = require('jquery');
//var bootstrap = require('bootstrap');
var ComputerCollection = require('./collections/ComputerCollection')
var DashboardView = require('./views/DashboardView.js');
var MenuView = require('./views/MenuView.js');
//var ComputerView = require('./views/ComputerView.js');
var menuView = new MenuView();
var dashboardView = new DashboardView();
//var computerView = new ComputerView();
menuView.render();
dashboardView.render();
//computerView.render();
$('#content').html(dashboardView.el);
$('#menu').html(menuView.el);
//$('#form').html(computerView.el);
