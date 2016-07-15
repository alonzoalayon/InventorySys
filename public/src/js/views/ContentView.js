var Backbone = require('backbone');
var _ = require('underscore');
var ArenaDashboardView = require('./ArenaDashboardView');
var ITDashboardView = require('./ITDashboardView');
var ContentView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
                  <a href="#home"><h1 align="center" class="page-header" style="font-family: \'Cantarell\', sans-serif; background-color: #FFBF46;border: 5px solid #FBFBFF ;">Invent Story System</h1></a>\
                  <div class="col-lg-4 col-md-6">\
                  <div class="panel panel-primary boxed" style="background-color: #01BAEF;border: 5px solid #FBFBFF ;">\
                     <a href="#arena"><div class="panel-body">\
                     <h2 style="font-family: \'Cantarell\', sans-serif;" align="center">ARENA</h2>\
                     <img id="arena" class="img-responsive" src="../images/sport/png/weight-1.png" style="height: 50px; display: block;\
margin-left: auto;\
margin-right: auto; ">\
</div></a>\
                   </div>\
               </div>\
               <div class="col-lg-4 col-md-6">\
               <div class="panel panel-primary boxed" style="background-color: #E63B2E;border: 5px solid #FBFBFF ;">\
                  <a href="#it"><div class="panel-body">\
                  <h2 style="font-family: \'Cantarell\', sans-serif;" align="center">IT</h2>\
                  <img class="img-responsive" src="../images/essential-collection/png/server.png" style="height: 50px; display: block; margin-left: auto; margin-right: auto; ">\
                  </div></a>\
                </div>\
            </div>\
            <div class="col-lg-4 col-md-6">\
            <div class="panel panel-primary boxed" style="background-color: #FF6B35;border: 5px solid #FBFBFF ;">\
               <a href="#store"><div class="panel-body">\
               <h2 style="font-family: \'Cantarell\', sans-serif;" align="center">STORE</h2>\
               <img class="img-responsive" src="../images/essential-collection/png/price-tag.png" style="height: 50px; display: block;\
margin-left: auto;\
margin-right: auto;">\
               </div></a>\
             </div>\
         </div>\
                  <!--<div id="content"></div>-->\
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
module.exports = ContentView;
