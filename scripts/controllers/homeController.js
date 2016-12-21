(function(module){

  var homeController = {};

  homeController.reveal = function(ctx, next) {
    window.document.title = 'Home';
    $('#about').hide();
    $('#movie-info').hide();
    $('#movies-list').show();

    next();
  };

  module.homeController = homeController;
})(window);
