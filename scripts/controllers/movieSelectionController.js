(function(module){

  var movieSelectionController = {};

  movieSelectionController.reveal = function() {

    $('#movie-data').find('div.' + $(this).attr('class')).siblings().hide();
    $('#topMoviesList').hide();
    $('#movie-data').find('div.' + $(this).attr('class')).show();
  //$(this).show;
  //$(this).siblings().hide();
  };
  module.movieSelectionController = movieSelectionController;
})(window);
