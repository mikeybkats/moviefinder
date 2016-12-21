(function(module){

  var movieSelectionController = {};

  movieSelectionController.reveal = function(ctx, next) {
    $('#about').hide();
    $('#movies-list').hide();
    $('#movies-detail').show();

    function showClickedMovie(){
      window.document.title = ctx.params.title;
      $('#movies-detail').children().hide();
      $('#movies-detail').find('#' + ctx.params.title.replace(/[^a-zA-Z ]/g, '')).show();
    }

    setTimeout(showClickedMovie, 0);

    next();
  };
  module.movieSelectionController = movieSelectionController;
})(window);
