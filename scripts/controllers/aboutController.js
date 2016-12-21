(function(module){

  var aboutController = {};

  aboutController.reveal = function(ctx, next) {
    window.document.title = 'About';
    //$('#movies-list').hide();
    //$('#movies-detail').hide();
    //$('#about').show();

    next();
  };
  module.about = aboutController;
})(window);
