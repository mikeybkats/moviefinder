(function(module) {
  var movieListRenderObj = {};

  showListRender = function(event){
    $('#showFullList').on('click', function(){

      if( $('#showFullList').html() === 'show all top movies' ){
        $('#showFullList').html('hide all top movies');
        $('#movies-list ul').children().hide();
        $('#movies-list ul').children().show();
      }

      else{
        $('#showFullList').html('show all top movies');
        $('#movies-list ul').children().show();
        for (var i = 5; i < 20; i++) {
          $('#movies-list ul').children().eq(i).hide();
        }
      }

    });
  };

  movieListRender = function() {
    for (var i = 5; i < 20; i++) {
      $('#movies-list ul').children().eq(i).hide();
    }
    // movieListRenderObj.showListRender();
  };

  // Movie.fetchAll(movieListRenderObj.movieListRender);
  module.movieListRenderObj = movieListRenderObj;
})(window);
