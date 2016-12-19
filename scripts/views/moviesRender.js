(function(module){
  var moviesViewObject = {};
  var moviesTitles = [];

  moviesViewObject.renderMovies = function(){
    moviesPlaying.allMovies.forEach(function(cur, indx, array){
      moviesTitles.push(cur.title);
      $('#main-content').empty().append(moviesTitles);
      console.log(cur.title);
    });

  };

  Movie.fetchAll(moviesViewObject.renderMovies);
  module.moviesViewObject = moviesViewObject;
})(window);
