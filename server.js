var express = require('express'),
  requestProxy = require('express-request-proxy'),
  path = require('path'),
  bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

// var proxyMovieDb = function(request, response) {
//   console.log('Routing MovieDb request for', request.params[0]);
//   (requestProxy({
//     url: 'https://api.themoviedb.org/3/' + '?api_key= ' + process.env.DATABASE_TOKEN
//   }))(request, response);
// };
//
// app.get('/themoviedb/*', proxyMovieDb);

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log('App now running on port', port);
});
