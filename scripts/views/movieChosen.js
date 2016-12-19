(function(module){
  var movieChosen = {};
  
  moviesPlaying.allMovies.toHtml = function(){
    var $templateScript = $('#movieTemplate').html();
    var moviesCompiler = Handlebars.compile($templateScript);
    return moviesCompiler(this);
  };

  Movie.prototype.toHtml();

})(window);
