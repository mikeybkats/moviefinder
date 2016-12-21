(function(module){

  var aboutController = {};

  homeController.reveal = function(ctx, next) {
    $('#topMovie').hide();
    $('#movies-detail').hide();
    $('#about').show();

    next();
  };
  module.about = homeController;
})(window);
