(function(module){

  moviesPlaying = {};
  moviesPlaying.allMovies = [];

  moviesPlaying.moviesQuery = function (callback){
    $.ajax({
      async: true,
      crossDomain: true,
      url:'https://api.themoviedb.org/3/' + 'movie/now_playing' + '?api_key='+DATABASE_TOKEN,
      method: 'GET',
      headers: {},
      data: {},
      success: function(data, string, xhr){
        console.log(data);
        data.results.forEach(function(obj){
          moviesPlaying.allMovies.push(obj);
        });
      }
    });
  }
})(window);
