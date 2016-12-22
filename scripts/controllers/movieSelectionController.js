(function(module){

  var movieSelectionController = {};

  movieSelectionController.reveal = function(ctx, next) {
    $('#about').hide();
    $('#main-content').hide();
    $('#movie-info').show();
    $('#backToHome').show();

    Movie.fetchAll(function(movieArray){
      if (!movieArray) {
        console.error('failed to load the movies');
        return;
        // handele error
      }
      // do something with the movie array (aka render page)
      console.log('boooya!', ctx);
      window.document.title = ctx.params.title;
      $('#movie-info').children().hide();
      $('#' + ctx.params.title).show();

    });

    next();
  };
  module.movieSelectionController = movieSelectionController;
})(window);
