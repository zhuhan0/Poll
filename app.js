// create express server.
var express = require('express');
var app = express();

// link ejs files as webpages.
app.set('view engine', 'ejs');

// create routes.
var routes = require('./routes');

// add static resources, which are stored in /public.
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.listen(process.env.PORT || 3000);
