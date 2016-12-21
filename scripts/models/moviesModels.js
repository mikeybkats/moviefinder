moviesPlaying = {};
moviesPlaying.allMovies = [];

moviesGenres = {};
moviesGenres.allGenres = [];

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
  this.movieImage = 'https://image.tmdb.org/t/p/w500'+ opts.backdrop_path;
  this.path = '/movie/' + opts.title.replace(/\s+/g, '');
  this.contextTitle = opts.title.replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, '');

};

function Genre(opts){
  this.name = opts.name;
  this.id = opts.id;
};

Movie.prototype.insertRecord = function() {
  webDB.execute(
    [{
      'sql': 'INSERT INTO articles (poster path, overview, release_date, database id, title, popularity, vote count, vote average, genre ids, movie image, path, context title) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
      'data': [
        this.poster_path,
        this.overview,
        this.release_date,
        this.id,
        this.title,
        this.popularity,
        this.vote_count,
        this.vote_average,
        this.genre_ids,
        this.movieImage,
        this.path,
        this.contextTitle
      ]
    }]
  );
};

Movie.sendToJson = function(data){
  var movieJSONData = JSON.stringify(data);
  console.log(movieJSONData);

  responseData.forEach(function(obj) {
    var movie = new Movie(obj);
    movie.insertRecord();
  });
    //
    // webDB.execute(
    //     'SELECT * FROM articles',
    //         function(rows) {
    //           Article.loadAll(rows);
    //           nextFunction();
    //         });

};

Movie.createTableFromLocalStorage = function(){
  // creates an empty sql table
    // get data from local storage
  var data = function(){
    data = localStorage.getItem('allMoviesData');
    data = JSON.parse(data);
    return data;
  };
  data();
  return data;
};

Movie.fetchAll = function (callback){
  $.ajax({
    async: true,
    crossDomain: true,
    url:'/movieapi/movie/now_playing' ,
    method: 'GET',
    success: function(data, string, xhr){

      Movie.sendToJson(data.results);

      if (data){
        data.results.forEach(function(obj){
          moviesPlaying.allMovies.push(new Movie(obj));
        });
      }

      sortMoviesTopRating();
      appendMoviesList();
      appendMoviesSelection();
      movieListRender();
      showListRender();
      topMovieBanner();
      // callback();
    }
  });

  $.ajax({
    async: true,
    crossDomain: true,
    url: '/movieapi/genre/movie/list',
    method: 'GET',
    success: function(data, string, xhr){
      // console.log('/genre/movie/list success', data);
      //console.log('/genre/movie/list success', data);
      if ( data && data.genres){
        data.genres.forEach(function(obj){
          moviesGenres.allGenres.push(new Genre(obj));
        });
      }
      // callback();
    }
  });
};
