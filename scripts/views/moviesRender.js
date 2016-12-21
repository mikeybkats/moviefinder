Movie.prototype.detailToHtml = function(){
  var $templateScript = $('#movieTemplate').html();
  var moviesCompiler = Handlebars.compile($templateScript);
  return moviesCompiler(this);
};

function appendMoviesSelection(){
  moviesPlaying.allMovies.forEach(function(movieObj) {
    $('#movies-detail').append(movieObj.detailToHtml());
  });
};

function appendMoviesList(){
  Movie.moviesWithNumbers = moviesPlaying.allMovies.map(function(movieObj, index){
    return {
      indexValue: index+1,
      title: movieObj.title,
      path: movieObj.path
    };
  });

  var context = {
    data: Movie.moviesWithNumbers
  };

  var $template = $('#movieListTemplate').html();
  var compiledMoviesList = Handlebars.compile($template)(context);
  $('#movies-list').append(compiledMoviesList);

};

function sortMoviesTopRating(){
  moviesPlaying.allMovies.sort(function(a, b){
    return parseFloat(b.vote_average) - parseFloat(a.vote_average);
  });
};

Movie.fetchAll();
