(function(module){
  var moviesViewObject = {};
  var moviesTitles = [];

  moviesViewObject.renderMovies = function(){};

  Movie.fetchAll(moviesViewObject.renderMovies);
  module.moviesViewObject = moviesViewObject;
})(window);
