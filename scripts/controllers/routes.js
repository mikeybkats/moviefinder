page('/', homeController.reveal);

page('/movie/:title', movieSelectionController.reveal);

function showAboutPage(){
  var aboutController = {};
  aboutController.reveal = function(ctx, next) {
    window.document.title = 'About';
    $('#main-content').hide();
    $('#movie-info').hide();
    $('#about').show();
    //this is function is here because it wasn't working in the aboutController page.
    //also, once the index page is modified, the code can be refracted a bit to refer to classes rather than ids.

    next();
  };

  page('/about', aboutController.reveal);
}
showAboutPage();

page();
