//get ip address, language, and browser information

var useragent = require('useragent')
var express = require('express');
var ip = require('ip');
var app = express();


app.use(express.static('public'));

app.get('/', function(req, res){
var agent = useragent.parse(req.headers['user-agent']);
  res.send(agent.toString() + '<br>' + ip.address());
  
  
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
