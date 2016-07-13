var Backbone = require('backbone');
var _ = require('underscore');
var ArenaDashboardView = require('./ArenaDashboardView');
var ContentView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
    <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">\
      <span class="hamb-top"></span>\
      <span class="hamb-middle"></span>\
      <span class="hamb-bottom"></span>\
    </button>\
      <div class="container">\
   <p>Signed in as </p>\
          <div class="row">\
              <div class="col-lg-8 col-lg-offset-2">\
                  <h1 align="center" class="page-header" style="font-family: \'Cantarell\', sans-serif; background-color: #FFBF46;border: 5px solid #FBFBFF ;">Invent Story System</h1>\
                  <div class="col-lg-4 col-md-6">\
                  <div class="panel panel-primary boxed" style="background-color: #01BAEF;border: 5px solid #FBFBFF ;">\
                     <div class="panel-body">\
                     <h2 style="font-family: \'Cantarell\', sans-serif;" align="center">ARENA</h2>\
                     <img id="arena" class="img-responsive" src="../images/sport/png/weight-1.png" style="height: 50px; display: block;\
margin-left: auto;\
margin-right: auto; ">\
</div>\
                   </div>\
               </div>\
               <div class="col-lg-4 col-md-6">\
               <div class="panel panel-primary boxed" style="background-color: #E63B2E;border: 5px solid #FBFBFF ;">\
                  <a href="#"><div class="panel-body">\
                  <h2 style="font-family: \'Cantarell\', sans-serif;" align="center">IT</h2>\
                  <img class="img-responsive" src="../images/essential-collection/png/server.png" style="height: 50px; display: block; margin-left: auto; margin-right: auto; ">\
                  </div></a>\
                </div>\
            </div>\
            <div class="col-lg-4 col-md-6">\
            <div class="panel panel-primary boxed" style="background-color: #FF6B35;border: 5px solid #FBFBFF ;">\
               <a href="#"><div class="panel-body">\
               <h2 style="font-family: \'Cantarell\', sans-serif;" align="center">STORE</h2>\
               <img class="img-responsive" src="../images/essential-collection/png/price-tag.png" style="height: 50px; display: block;\
margin-left: auto;\
margin-right: auto; ">\
               </div></a>\
             </div>\
         </div>\
                  <!--<div id="content"></div>-->\
              </div>\
          </div>\
      </div>\
  '),
    initialize: function() {
        this.render();
    },
    events:{
      'click #arena': 'handleArenaView'
    },
    handleArenaView: function(){
      console.log('hello');
      var tabsView = new ArenaDashboardView();
      tabsView.render();
      $('#page-content-wrapper').html(tabsView.el);
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
