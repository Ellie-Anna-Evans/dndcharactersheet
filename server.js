var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next){
	
});

app.get('/chsheet/:index', function(req, res, next){
	
});

app.get('/style.css', function(req, res, next){
	res.status(200).sendFile(path.join(__dirname, 'public', 'style.css'));
});

app.get('/index.js', function(req, res, next){
	res.status(200).sendFile(path.join(__dirname, 'public', 'index.js'));
});

app.get('*', function(req, res, next){
	res.status(404).render('404Page');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log("== Server listening on port", port);
});