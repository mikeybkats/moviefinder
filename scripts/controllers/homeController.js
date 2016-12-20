(function(module){

  var homeController = {};

  homeController.reveal = function() {
    $('#topMoviesList').show();
    $('#movie-data').hide();
  //  $('#individual-movie-data').hide();
  };

  homeController.hide = function() {
    $('#topMoviesList').hide();
    $('#movie-data').show();
  //  $('#individual-movie-data').hide();
  };
  module.homeController = homeController;
})(window);
