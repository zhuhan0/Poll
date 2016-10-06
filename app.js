var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.listen(3000, function() {
  console.log("The app is running on localhost:3000");
});
