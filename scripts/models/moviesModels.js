(function(module){

  moviesPlaying = {};
  moviesPlaying.allMovies = [];
  var moviesTitles = [];

  moviesPlaying.moviesQuery = function (callback){
    $.ajax({
      async: true,
      crossDomain: true,
      url:'https://api.themoviedb.org/3/' + 'movie/now_playing' + '?api_key='+DATABASE_TOKEN,
      method: 'GET',
      headers: {},
      data: {},
      success: function(data, string, xhr){
        data.results.forEach(function(obj){
          moviesPlaying.allMovies.push(obj);
        });

        console.log(data);
        console.log(moviesPlaying.allMovies);

        moviesPlaying.allMovies.forEach(function(cur, indx, array){
          moviesTitles.push(cur.title);
          $('#main-content').empty().append(moviesTitles);
          console.log(cur.title);
        });

      }
    });
  }
})(window);

moviesPlaying.moviesQuery();
