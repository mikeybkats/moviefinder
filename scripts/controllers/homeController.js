(function(module){

  var homeController = {};

  homeController.reveal = function(ctx, next) {
    $('#topMovie').show();
    $('#movies-detail').hide();

    next();
  };

  module.homeController = homeController;
})(window);
