var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var Router = Backbone.Router.extend({

           //The 'routes' maps URLs with parameters to functions on your router
           routes: {
		'' : 'home',
		'view': 'viewImage'
	},
	home: function () {
		alert('you are viewing home page');
	},
	viewImage: function () {
		alert('you are viewing an image');
	}
        });
        module.exports=Router;
