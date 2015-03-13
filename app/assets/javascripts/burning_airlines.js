var app = app || {}


// global collection of all blog posts
app.newPlanes = new app.Planes();


$(document).ready(function(){
 
  if($('#main').length === 0) {
    return;
  };

  // replace <%erb style with handlebars style {{}}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };



  // app.Planes.fetch().done(function(){

  app.newPlanes.fetch().done(function(){
    // this is global so we can access it inside certain views
    app.appRouter = new app.AppRouter();

    // this kicks off the router and makes the back button and fwd button work
    Backbone.history.start();
  });

  
  // $('#bookSeat').on('click', function (){
  //   console.log('click is working');
  //   app.appRouter = new app.AppRouter();
  //   app.appRouter.navigate('flights/1', true);
  // });
  
  // Backbone.history.start();
});


