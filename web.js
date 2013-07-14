var express = require('express');
var app = express.createServer(express.logger());

var response = fs.readFileSync('index.html');
response = response.toString('utf-8');

app.get('/', function(request, response) {
  response.send(response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
