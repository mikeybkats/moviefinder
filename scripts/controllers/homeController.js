(function(module){

  var homeController = {};

  homeController.reveal = function(ctx, next) {
    window.document.title = 'moviefinder';
    $('#about').hide();
    $('#movie-info').hide();
    $('#backToHome').hide();
    $('#movies-list').show();

    next();
  };

  module.homeController = homeController;
})(window);
