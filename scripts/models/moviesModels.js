function Movie(opts){
  this.poster_path = opts.poster_path;
  this.overview = opts.overview;
  this.release_date = opts.release_date;
  this.genre_ids = opts.genre_ids;
  this.id = opts.id;
  this.title = opts.title;
  this.popularity = opts.popularity;
  this.vote_count = opts.vote_count;
  this.vote_average = opts.vote_average;
};

moviesPlaying = {};
moviesPlaying.allMovies = [];

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
};
