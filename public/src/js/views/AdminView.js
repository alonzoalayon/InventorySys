var Backbone = require('backbone');
var _ = require('underscore');
var mongoose = require('mongoose');

var AdminView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <a href="#home"><h1 align="center" class="page-header home" style="font-family: \'Cantarell\', sans-serif; background-color: #FFBF46;border: 5px solid #FBFBFF ;">Invent Story System</h1></a>\
    <h1 align="center" class="page-header" style="font-family: \'Cantarell\', sans-serif; background-color: #E63B2E;border: 5px solid #FBFBFF ;">Admin</h1>\
    <div class="container">\
    <div class="row">\
    <div class="col-lg-3 col-md-6">\
        <div class="panel panel-danger">\
            <div class="panel-heading">\
                <div class="row">\
                    <div class="col-xs-3">\
                        <i class="fa fa-user fa-5x"></i>\
                    </div>\
                    <div class="col-xs-9 text-right">\
                        <div class="huge"></div>\
                        <div>Users</div>\
                    </div>\
                </div>\
            </div>\
            <a href="#admin/add">\
                <div class="panel-footer">\
                <div class="clearfix">\
                    <span class="pull-left" style="color: #A94442;">View/Add Users</span>\
                    <span class="pull-right" style="color: #A94442;"><i class="fa fa-2x fa-arrow-circle-right"></i></span>\
                    <div class="clearfix"></div>\
                </div>\
                  </div>\
            </a>\
        </div>\
    </div>\
        <div class="col-lg-3 col-md-6">\
            <div class="panel panel-primary">\
                <div class="panel-heading">\
                    <div class="row">\
                        <div class="col-xs-3">\
                            <i class="fa fa-map-marker fa-5x"></i>\
                        </div>\
                        <div class="col-xs-9 text-right">\
                            <div class="huge"></div>\
                            <div>Department</div>\
                        </div>\
                    </div>\
                </div>\
                <a href="#admin/add_dept">\
                    <div class="panel-footer">\
                    <span class="pull-left" style="color: #337ab7;">View/Add Locations</span>\
                    <span class="pull-right" style="color: #337ab7;"><i class="fa fa-2x fa-plus-circle"></i></span>\
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

    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template({}));
        // this will stick the template inside of the el
        return this;
    }
});
//var formView = new FormView({ el: $("#form") });

module.exports = AdminView;
