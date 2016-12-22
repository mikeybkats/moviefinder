moviesPlaying = {};
moviesPlaying.allMovies = [];

function Movie(opts){
  this.contextTitle = opts.title.replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, '');
  this.poster_path = opts.poster_path;
  this.release_date = opts.release_date;
  this.id = opts.id;
  this.vote_count = opts.vote_count;
  this.movieImage = 'https://image.tmdb.org/t/p/w500'+ opts.backdrop_path;
  this.path = '/movie/' + opts.title.replace(/\s+/g, '');
  this.vote_average = opts.vote_average;
  this.genre_ids = opts.genre_ids[0];
  this.popularity = opts.popularity;
  this.overview = opts.overview;
  this.title = opts.title;
};

Movie.createTable = function (){
  webDB.execute(
      'CREATE TABLE IF NOT EXISTS movies (id INTEGER PRIMARY KEY, title VARCHAR, overview VARCHAR, popularity VARCHAR, genre_ids INTEGER, vote_count INTEGER, vote_average INTEGER, release_date DATE NOT NULL, poster_path VARCHAR, contextTitle VARCHAR, movieID VARCHAR, movieImage VARCHAR, path VARCHAR);'
  );

  console.log('Successfully set up the movies table.');
};

Movie.clearTable = function() {
  webDB.execute(
    'DELETE FROM movies;'
  );
};

Movie.prototype.insertRecord = function() {
  webDB.execute(
    [{
      'sql': 'INSERT INTO movies (title, overview, popularity, genre_ids, vote_count, vote_average, release_date, poster_path, contextTitle, movieID, movieImage, path ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
      'data': [this.title, this.overview, this.popularity, this.genre_ids, this.vote_count, this.vote_average, this.release_date, this.poster_path, this.contextTitle, this.id, this.movieImage, this.path ]
    }]
  );
};

// this pushes to the data table
Movie.makeMovieObjects = function(data){
  console.log(data);
  data.map(function(obj) {
    var movie = new Movie(obj);
    // console.log(movie);
    movie.insertRecord();
  });
};

Movie.loadAll = function(rows) {
  moviesPlaying.allMovies = rows.map(function(ele) {
    return new Movie(ele);
  });
};

Movie.allMoves = function(){

};

Movie.fetchAll = function (callback){
  webDB.execute(
    'SELECT * FROM movies',
    function (rows){
      if (rows.length) {
        Movie.loadAll(rows);
        // callback();
      }else{
        $.ajax({
          async: true,
          crossDomain: true,
          url:'/movieapi/movie/now_playing' ,
          method: 'GET',
          success: function(data, string, xhr){

            Movie.makeMovieObjects(data.results);

            appendMoviesList();
            // callback();

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
          }
        });
        webDB.execute(
              'SELECT * FROM movies',
              function(rows) {
                console.log(rows);
                Movie.loadAll(rows);
                // callback();
              });
      }
    });
};

Movie.clearTable();
Movie.createTable();
