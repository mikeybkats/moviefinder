(function(module){

  var movieSelectionController = {};

  movieSelectionController.reveal = function(ctx, next) {
    $('#movies-list').hide();
    $('#movies-detail').show();

    function showClickedMovie(){
      $('#movies-detail').children().hide();
      $('#movies-detail').find('#' + ctx.params.title).show();
    }

    setTimeout(showClickedMovie, 0);

    next();
  };
  module.movieSelectionController = movieSelectionController;
})(window);
