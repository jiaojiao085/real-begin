// index.js
var express = require('express');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
var routes = require('./lib/routes/router')(app);


app.listen(3000);