(function(module) {
  var movieListRenderObj = {};

  buttonHover = function(){
    $('.hover-button').hover(
    function(){ $(this).css('background-color','rgba(94, 94, 248, 0.82)'); },
    function(){ $(this).css('background-color', '#13139B'); }
    );
  };

  movieListHover = function(){
    $('.movie-title').hover(
  	function(){ $(this).css('background-color','rgba(94, 94, 248, 0.82)'); },
  	function(){ $(this).css('background-color', 'transparent'); }
    );
    $('.movie-title').hover(
  	function(){ $(this).css('color','white'); },
  	function(){ $(this).css('color', 'black'); }
    );
  };

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
