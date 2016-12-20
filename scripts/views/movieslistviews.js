(function(module) {
  var movieListRenderObj = {};
  movieListRender = function() {
    for (var i = 5; i < 20; i++) {
      $('#topMoviesList').children().eq(i).hide();
      // console.log($('#topMoviesList').children().eq(i).hide());
      console.log(i);
    }
    $('#movie-data').hide();
  };

  module.movieListRenderObj = movieListRenderObj;
})(window);
