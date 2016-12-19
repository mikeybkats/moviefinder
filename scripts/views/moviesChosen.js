(function(module){
  //var movieChosen = {};
  //
  // Movie.renderIndividualMovie = function(movie) {
  //   $('#individual-movie-data').append(movie.toHtml);
  // };

  Movie.prototype.toHtml = function(){
    var $templateScript = $('#movieTemplate').html();
    var moviesCompiler = Handlebars.compile($templateScript);
    return moviesCompiler(this);
    console.log(this);
  };

  // $('#individual-movie-data').append(moviesPlaying.allMovies[0].toHtml('#movieTemplate'));

  moviesPlaying.allMovies.forEach(function(movieObj) {
    $('#individual-movie-data').append(movieObj.toHtml());
  });
})(window);
