var express = require("express"),
    http = require('http'),
    path = require('path');

var port = process.env.PORT || 4000;
var app = express();

app.configure(function(){
  app.set('port', port);

  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(app.router);

  app.use(express.static(__dirname + '/public'));
  app.use("/lib", express.static(__dirname + '/lib'));
  app.use("/res", express.static(__dirname + '/lib/candy/res'));
});

app.get("/", function(req, res) {
  res.redirect("/index.html");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
