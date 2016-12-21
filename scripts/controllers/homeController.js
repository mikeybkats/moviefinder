(function(module){

  var homeController = {};

  homeController.reveal = function(ctx, next) {
    window.document.title = 'Home';
    $('#movies-list').show();
    $('#movies-detail').hide();

    next();
  };

  module.homeController = homeController;
})(window);
