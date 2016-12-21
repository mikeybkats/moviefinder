(function(module){

  var movieSelectionController = {};

  movieSelectionController.reveal = function(ctx, next) {
    $('#about').hide();
    $('#movies-list').hide();
    $('#movie-info').show();

    function showClickedMovie(){
      window.document.title = ctx.params.title;
      $('#movie-info').children().hide();
      $('#movie-info').find('#' + ctx.params.title.replace(/[^a-zA-Z ]/g, '')).show();
    }

    setTimeout(showClickedMovie, 0);

    next();
  };
  module.movieSelectionController = movieSelectionController;
})(window);
