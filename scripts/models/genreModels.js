moviesGenres = {};
moviesGenres.allGenres = [];

function Genre(opts){
  this.name = opts.name;
  this.id = opts.id;
};

Genre.createTable = function (){
  webDB.execute(
    'CREATE TABLE IF NOT EXISTS genres (id INTEGER PRIMARY KEY, name VARCHAR, genre_id VARCHAR);'
  );
};

Genre.clearTable = function() {
  webDB.execute(
    'DELETE FROM genres;'
  );
};

Genre.makeGenreObjects = function(data){
  data.forEach(function(obj) {
    var genre = new Genre(obj);
    console.log(genre);
    genre.insertRecord();
  });
};

Genre.fetchAll = function (callback){
  $.ajax({
    async: true,
    crossDomain: true,
    url: '/movieapi/genre/movie/list',
    method: 'GET',
    success: function(data, string, xhr){
      // console.log('/genre/movie/list success', data);
      if ( data && data.genres){
        data.genres.forEach(function(obj){
          moviesGenres.allGenres.push(new Genre(obj));
        });
      }
    }
  });
};
