function Movie(opts){
  this.poster_path = opts.poster_path;
  this.overview = opts.overview;
  this.release_date = opts.release_date;
  this.id = opts.id;
  this.title = opts.title;
  this.popularity = opts.popularity;
  this.vote_count = opts.vote_count;
  this.vote_average = opts.vote_average;
  this.genre_ids = opts.genre_ids[0];
  this.movieImage = 'http://image.tmdb.org/t/p/w500' + opts.backdrop_path;
};

function Genre(opts){
  this.name = opts.name;
  this.id = opts.id;
};

function appendMoviesList(){
  moviesPlaying.allMovies.forEach(function(movieObj){
    $('#movies-list').append(movieObj.listToHtml());
  });
};

function appendMoviesSelection(){
  moviesPlaying.allMovies.forEach(function(movieObj) {
    $('#movies-detail').append(movieObj.detailToHtml());
  });
};

moviesPlaying = {};
moviesPlaying.allMovies = [];

moviesGenres = {};
moviesGenres.allGenres = [];

Movie.fetchAll = function (callback){
  $.ajax({
    async: true,
    crossDomain: true,
    url:'/movieapi/movie/now_playing' ,
    method: 'GET',
    success: function(data, string, xhr){
      console.log('/genre/movie/now_playing success', data);

      if (data){
        data.results.forEach(function(obj){
          moviesPlaying.allMovies.push(new Movie(obj));
        });
      }
      console.log(moviesPlaying.allMovies);
      appendMoviesList();
      appendMoviesSelection();
      movieListRender();
      showListRender();
      // callback();
    }
  });

  $.ajax({
    async: true,
    crossDomain: true,
    url: '/movieapi/genre/movie/list',
    method: 'GET',
    success: function(data, string, xhr){
      console.log('/genre/movie/list success', data);
      if ( data && data.genres){
        data.genres.forEach(function(obj){
          moviesGenres.allGenres.push(new Genre(obj));
        });
      }
      // callback();
    }
  });
};
