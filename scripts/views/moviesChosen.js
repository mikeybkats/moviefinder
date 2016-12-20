(function(module){

  Movie.prototype.detailToHtml = function(){
    var $templateScript = $('#movieTemplate').html();
    // console.log('$templateScript', $templateScript);
    var moviesCompiler = Handlebars.compile($templateScript);
    return moviesCompiler(this);
    // console.log(this);
  };

  Movie.prototype.listToHtml = function(){
    var $templateScript = $('#movieListTemplate').html();
    var moviesCompiler = Handlebars.compile($templateScript);
    return moviesCompiler(this);  
  }

})(window);
