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
    if (obj){console.log('success: pushing object to table fucntion');}
  });
};


Movie.allMovies = function(){
  webDB.execute(
        'SELECT * FROM movies',
        function(rows) {
          if (rows){console.log('Success: rows are present in table');}
          Movie.loadAll(rows);
        });
};

Movie.fetchAll = function (callback){
  webDB.execute(
    'SELECT * FROM movies',
    function (rows){

      if (rows.length) {
        Movie.allMovies();
      }

      else{
        $.ajax({
          async: true,
          crossDomain: true,
          url:'/movieapi/movie/now_playing' ,
          method: 'GET',
          success: function(data, string, xhr){

            Movie.makeMovieObjects(data.results);
            Movie.allMovies();
            if (moviesPlaying.allMovies.length){
              console.log('Success: objects exported from table.');
              console.log(moviesPlaying.allMovies);
            }
            // appendMoviesList();
            // callback();

            // if (data){
            //   data.results.forEach(function(obj){
            //     moviesPlaying.allMovies.push(new Movie(obj));
            //   });
            // }

            // sortMoviesTopRating();

            // appendMoviesSelection();
            // movieListRender();
            // showListRender();
            // topMovieBanner();
          }
        });

      }
    });
};

Movie.clearTable();
Movie.createTable();
