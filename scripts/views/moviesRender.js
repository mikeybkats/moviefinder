
function appendMoviesSelection(){
  moviesPlaying.allMovies.forEach(function(movieObj) {
    $('#movies-detail').append(movieObj.detailToHtml());
  });
};

function appendMoviesList(){
  Movie.moviesWithNumbers = moviesPlaying.allMovies.map(function(movieObj, index){
    return {
      indexValue: index+1,
      title: movieObj.title
    };
  });

  var context = {
    data: Movie.moviesWithNumbers
  };

  var template = '<ul>{{#each data}}<li><a href="" id="moviePageLink" class="movie-title">{{indexValue}} {{title}}</a></li>{{/each}}</ul>';
  var rendered = Handlebars.compile(template)(context);
  $('#movies-list').append(rendered);
};

function sortMoviesTopRating(){
  moviesPlaying.allMovies.sort(function(a, b){
    return parseFloat(b.vote_average) - parseFloat(a.vote_average);
  });
};

Movie.fetchAll();
