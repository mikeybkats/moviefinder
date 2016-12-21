(function(module){

  Movie.prototype.detailToHtml = function(){
    var $templateScript = $('#movieTemplate').html();
    var moviesCompiler = Handlebars.compile($templateScript);
    return moviesCompiler(this);
  };

  Movie.prototype.listToHtml = function(){
    var $templateScript = $('#movieListTemplate').html();
    var moviesCompiler = Handlebars.compile($templateScript);
    return moviesCompiler(this);
  };

})(window);
