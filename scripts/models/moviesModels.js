moviesPlaying = {};
moviesPlaying.allMovies = [];

function Movie(opts){
  this.contextTitle = opts.title.replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, '');
  this.poster_path = opts.poster_path;
  this.release_date = opts.release_date;
  this.id = opts.id;
  this.vote_count = opts.vote_count;
  this.movieImage = 'https://image.tmdb.org/t/p/original'+ opts.backdrop_path;
  this.path = '/movie/' + this.contextTitle;
  this.vote_average = opts.vote_average;
  this.genre_ids = opts.genre_ids[0];
  this.popularity = opts.popularity;
  this.overview = opts.overview;
  this.title = opts.title;
  this.backdrop_path = opts.backdrop_path;
};

Movie.createTable = function (){
  webDB.execute(
      'CREATE TABLE IF NOT EXISTS movies (id INTEGER PRIMARY KEY, title VARCHAR, overview VARCHAR, popularity VARCHAR, genre_ids INTEGER, vote_count INTEGER, vote_average INTEGER, release_date DATE NOT NULL, poster_path VARCHAR, contextTitle VARCHAR, movieID INTEGER, movieImage VARCHAR, path VARCHAR, backdrop_path VARCHAR);'
  );

  console.log('Successfully set up the movies table.');
};

Movie.clearTable = function() {
  webDB.execute(
    'DROP TABLE movies;'
  );
};

Movie.prototype.insertRecord = function() {
  webDB.execute(
    [{
      'sql': 'INSERT INTO movies (title, overview, popularity, genre_ids, vote_count, vote_average, release_date, poster_path, contextTitle, movieID, movieImage, path, backdrop_path ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
      'data': [this.title, this.overview, this.popularity, this.genre_ids, this.vote_count, this.vote_average, this.release_date, this.poster_path, this.contextTitle, this.id, this.movieImage, this.path, this.backdrop_path ]
    }]
  );
};

// this pushes to the data table
Movie.makeMovieObjects = function(data){
  data.map(function(obj) {
    var movie = new Movie(obj);
    movie.insertRecord();
    if (obj){console.log('Success: passing object to table function');}
  });
};


Movie.allMovies = function(callback){
  webDB.execute(
        'SELECT * FROM movies',
        function(rows) {
          if (rows){
            console.log('Success: rows are present in table', rows);
            callback(rows);
            // Movie.loadAll(rows);
            return;
          }
          callback();
        });
};


Movie.fetchAll = function (callback){
  webDB.execute(
    'SELECT * FROM movies',
    function (rows){

      if (rows.length) {
        Movie.allMovies(callback);
      }

      else{
        $.ajax({
          async: true,
          crossDomain: true,
          url:'/movieapi/movie/now_playing' ,
          method: 'GET',
          success: function(data, string, xhr){
            Movie.makeMovieObjects(data.results);

            Movie.allMovies(function(data){
              callback(data)
            });

          }
        });

      }
    });
};

Movie.clearTable();
Movie.createTable();
