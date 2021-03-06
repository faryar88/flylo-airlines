
var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    "": "index", 
    "planes": "viewPlane",
    "flights": "viewFlight", 
    "flights/:id":"viewBook", 
    "search": "viewSearch"
  },

  index: function () {
    $('#main').hide();
  },


  viewPlane: function (id) {
    $('#main').show();
    $('#main').empty();
    // to make views work need to comment out fetches until data has been put into the db
    app.burningPlanes.fetch().done(function () {
      var plane = app.burningPlanes.get(id); 
      var planeView = new app.PlaneView({model: plane}); 
      planeView.render(); 
    });  
  },

  viewFlight: function (id) {
    $('#main').show();
    $('#main').empty();
    app.burningPlanes.fetch().done(function () {
      var flight = app.burningFlights.get(id); 
      var flightView = new app.FlightView({model: flight}); 
      flightView.render();
    }); 
   
    }, 

  viewBook:function(id){
    $('#main').show();
    app.burningFlights.fetch().done(function () {
      var flight = app.burningFlights.get(id); 
      var plane_id = flight.attributes.plane_id; 
      var options = {
        flight: app.burningFlights.get(id), 
        plane_id: flight.attributes.plane_id, 
        plane: app.burningPlanes.get(plane_id) 
      }
      var bookingView = new app.BookingView({model: options});
      bookingView.render(options.plane);
    }); 
  }, 

  viewSearch: function () {
    $('#main').show();
    $('#main').empty();
    console.log('search'); 
    var searchView = new app.SearchView({collection: app.Flights}); 
    searchView.render(); 

  }


});