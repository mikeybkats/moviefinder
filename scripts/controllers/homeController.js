(function(module){

  var homeController = {};

  homeController.reveal = function(ctx, next) {
    $('#about').hide();
    $('#movies-detail').hide();
    $('#topMovie').show();

    next();
  };

  module.homeController = homeController;
})(window);
