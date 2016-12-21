//(function(module){

  var movieSelectionController = {};

  movieSelectionController.reveal = function(ctx, next) {
    $('#movies-list').hide();
    $('#movies-detail').show();


    //console.log(ctx);

    console.log('title', '#' + ctx.params.title.replace(/[^a-zA-Z ]/g, ''));
    var moviesDetailID = '#' + ctx.params.title.replace(/[^a-zA-Z ]/g, '');
    //console.log($('#movies-detail').find('div' + ctx.params.title));
    console.log($('#movies-detail').find('#Arrival'));
    $('#movies-detail').find('#Arrival').siblings().hide();
    $(moviesDetailID).siblings().hide();
    //console.log($('#movies-detail').find('div').attr('id', '#' + ctx.params.title))
    //TODO: show a specific movies deails
    //$('#movies-detail').find('div').attr('id', '#' + ctx.params.title.replace(/[^a-zA-Z ]/g, '')).siblings().hide();
    //$('#movies-detail').find('div').attr('id', '#' + ctx.params.title).show();


    // $('#movie-data').find('div.' + $(this).attr('class')).siblings().hide();
    // $('#topMoviesList').hide();
    // $('#movie-data').find('div.' + $(this).attr('class')).show();

    next();
  };
  module.movieSelectionController = movieSelectionController;
//})(window);
