function Movie(opts){
  this.poster_path = opts.poster_path;
  this.overview = opts.overview;
  this.release_date = opts.release_date;
  this.id = opts.id;
  this.title = opts.title;
  this.popularity = opts.popularity;
  this.vote_count = opts.vote_count;
  this.vote_average = opts.vote_average;
  this.genre_ids = opts.genre_ids;
};

Movie.prototype.genre = function(){
  // finds if there is match between the genre_ids in the movie versus
  // the moviesGenre.allGenres array
    // function(){
    //  if (my genre_ids === moviesPlaying.allMovies)
    //}
  // movie.genre_name = moviesGenres.allGenres.name

};

function Genre(opts){
  this.name = opts.name;
  this.id = opts.id;
};

moviesPlaying = {};
moviesPlaying.allMovies = [];

moviesGenres = {};
moviesGenres.allGenres = [];

Movie.fetchAll = function (callback){
    $.ajax({
      async: true,
      crossDomain: true,
      url:'https://api.themoviedb.org/3/' + 'movie/now_playing' + '?api_key='+DATABASE_TOKEN,
      method: 'GET',
      headers: {},
      data: {},
      success: function(data, string, xhr){

        data.results.forEach(function(obj){
          moviesPlaying.allMovies.push(new Movie(obj));
        });

        console.log(data);
        console.log(moviesPlaying.allMovies);
        callback();
      }
    });
    $.ajax({
      async: true,
      crossDomain: true,
      url: 'https://api.themoviedb.org/3/' + 'genre/movie/list' + '?api_key='+DATABASE_TOKEN,
      method: 'GET',
      headers: {},
      data: {},
      success: function(data, string, xhr){
        console.log(data);

        data.genres.forEach(function(obj){
          moviesGenres.allGenres.push(new Genre(obj));
        });

        console.log(moviesGenres.allGenres);
        callback();
      }
    });

};
