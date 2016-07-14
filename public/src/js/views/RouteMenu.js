var Backbone = require('backbone');
var mongoose = require('mongoose');
var _ = require('underscore');
var Router = require('../routes/Router.js');
var RouteMenu = Backbone.View.extend({
            el: '#sidebar-wrapper',   //'el' defines which element to be used as the view reference

            //defines a click event to be occur on link
            events: {
               'click a' : 'onClick'
            },

            //After clicking on a link, router calls 'navigate' to update URL
            onClick: function( e ) {
               router.navigate('/');
            }
        });
module.exports = RouteMenu;
