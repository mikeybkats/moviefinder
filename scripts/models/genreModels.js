// moviesGenres = {};
// moviesGenres.allGenres = [];
//
// function Genre(opts){
//   this.name = opts.name;
//   this.id = opts.id;
// };
//
// Genre.createTable = function (){
//   webDB.execute(
//     'CREATE TABLE IF NOT EXISTS genres (id INTEGER PRIMARY KEY, genre VARCHAR, genre_id VARCHAR);'
//   );
// };
//
// Genre.clearTable = function() {
//   webDB.execute(
//     'DROP TABLE genres;'
//   );
// };
//
// Genre.insertRecord = function (){
//   webDB.execute(
//     [{
//       'sql': 'INSERT INTO genres ( genre, genre_id ) VALUES (?, ?);',
//       'data': [this.name, this.id ]
//     }]
//   );
// };
//
// Genre.makeGenreObjects = function(data){
//   data.forEach(function(obj) {
//     var genre = new Genre(obj);
//     console.log(genre);
//     genre.insertRecord();
//   });
// };
//
// Genre.allGenres = function(){
//   webDB.execute(
//         'SELECT * FROM genres',
//         function(rows) {
//           if (rows){console.log('Success: rows are present in table');}
//           Genre.loadAll(rows);
//         });
// };
//
// Genre.loadAll = function(){
//   movieGenres.allGenres = rows.map(function(ele) {
//     return new Movie(ele);
//   });
// };
//
// Genre.fetchAll = function (callback){
//   $.ajax({
//     async: true,
//     crossDomain: true,
//     url: '/movieapi/genre/movie/list',
//     method: 'GET',
//     success: function(data, string, xhr){
//
//     }
//   });
// };
