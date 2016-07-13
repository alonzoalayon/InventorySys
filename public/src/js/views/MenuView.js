var Backbone = require('backbone');
var _ = require('underscore');
var MenuView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">\
        <ul class="nav sidebar-nav">\
            <li class="sidebar-brand">\
                <a href="#">\
                   Bootstrap 3\
                </a>\
            </li>\
            <li>\
                <a href="#"><i class="fa fa-fw fa-home active"></i> Home</a>\
            </li>\
            <li>\
                <a href="arena.ejs"><i class="fa fa-fw fa-folder"></i>Dashboard</a>\
            </li>\
            <li>\
                <a href="#"><i class="fa fa-fw fa-file-o"></i>Logout</a>\
            </li>\
            <li>\
                <a href="#"><i class="fa fa-fw fa-cog"></i> Third page</a>\
            </li>\
            <li class="dropdown">\
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-plus"></i> Dropdown <span class="caret"></span></a>\
              <ul class="dropdown-menu" role="menu">\
                <li class="dropdown-header">Dropdown heading</li>\
                <li><a href="#">Action</a></li>\
                <li><a href="#">Another action</a></li>\
                <li><a href="#">Something else here</a></li>\
                <li><a href="#">Separated link</a></li>\
                <li><a href="#">One more separated link</a></li>\
              </ul>\
            </li>\
            <li>\
                <a href="#"><i class="fa fa-fw fa-bank"></i> Page four</a>\
            </li>\
            <li>\
                <a href="#"><i class="fa fa-fw fa-dropbox"></i> Page 5</a>\
            </li>\
            <li>\
                <a href="#"><i class="fa fa-fw fa-twitter"></i> Last page</a>\
            </li>\
        </ul>\
    </nav>\
  '),
    initialize: function() {
        this.render();
    },
    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template({
            //sodas: this.collection
        }));
        // this will stick the template inside of the el
        return this;
    }
});
//var formView = new FormView({ el: $("#form") });
module.exports = MenuView;
