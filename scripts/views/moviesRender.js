Movie.prototype.detailToHtml = function(){
  var $templateScript = $('#movieTemplate').html();
  var moviesCompiler = Handlebars.compile($templateScript);
  return moviesCompiler(this);
};

function appendMoviesSelection(){
  moviesPlaying.allMovies.forEach(function(movieObj) {
    $('#movie-info').append(movieObj.detailToHtml());
  });
};

function appendMoviesList(){
  console.log('line 14', moviesPlaying.allMovies);
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

function topMovieBanner() {
  console.log(moviesPlaying.allMovies);
  $('#topMovieBanner').css('background-image', 'url(' + moviesPlaying.allMovies[0].movieImage + ' )' );
};

Movie.loadAll = function(rows) {
  moviesPlaying.allMovies = rows.map(function(ele) {
    return new Movie(ele);
  });
  if (moviesPlaying.allMovies.length){console.log('Success: mapping all movies to object constructor.');}
  appendMoviesList();
  appendMoviesSelection();
  movieListRender();
  showListRender();
  topMovieBanner();
};

Movie.fetchAll();
