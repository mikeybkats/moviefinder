require('dotenv').load();

var express = require('express');
var requestProxy = require('express-request-proxy');

var app = express();

app.get('/movieapi/*', function(req, res){
  var url = 'https://api.themoviedb.org/3/' + req.params[0];
  req.query.api_key = process.env.MOVIE_FINDER_TOKEN;

  // console.log('url', url);
  // console.log('req.params', req.params);
  // console.log('req.query', req.query);
  requestProxy({
    url: url,
    query: req.query,
  })(req, res);
});

app.use(express.static(__dirname + '/'));

var server = app.listen(process.env.PORT , function () {
  console.log('App now running on port', process.env.PORT);
});
