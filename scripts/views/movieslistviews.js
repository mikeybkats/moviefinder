(function(module) {
  var movieListRenderObj = {};

  movieListRender = function() {
    for (var i = 5; i < 20; i++) {
      $('#topMoviesList').children().eq(i).hide();
    }
    $('#movie-data').hide();
  };

  showListRender = function(event){
    $('#showFullList').on('click', function(){

      if( $('#showFullList').html() === 'show all top movies' ){
        $('#showFullList').html('hide all top movies');
        $('#topMoviesList').children().hide();
        $('#topMoviesList').children().show();
      }

      else{
        $('#showFullList').html('show all top movies');
        $('#topMoviesList').children().show();
        for (var i = 5; i < 20; i++) {
          $('#topMoviesList').children().eq(i).hide();
        }
      }

    });
  };

  module.movieListRenderObj = movieListRenderObj;
})(window);
