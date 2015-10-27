// index.js
var express = require('express');
var app = express();
var path=require('path');
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');  
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//var routes = require('./lib/routes/router')(app);
app.get('/*', function(req, res) {
  // res.sendfile('./views/index.html');
  	res.send(__dirname);
});
	 

app.use('/views',express.static(path.join(__dirname, 'views')));
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/share',express.static(path.join(__dirname, 'share')));

app.listen(3000);