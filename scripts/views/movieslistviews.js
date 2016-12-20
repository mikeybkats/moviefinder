(function(module) {
  var movieListRenderObj = {};
  movieListRender = function() {
    for (var i = 10; i < 20; i++) {
      $('#topMoviesList').children().eq(i).hide();
      // console.log($('#topMoviesList').children().eq(i).hide());
    }
    $('#movie-data').hide();
  };
  movieListRender();
  module.movieListRenderObj = movieListRenderObj;
})(window);
