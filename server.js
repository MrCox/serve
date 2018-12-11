var express = require('express');
var app = express();
var fs = require('fs');
var page = fs.readFileSync('./page.html').toString();

app.get('/', function(e, r) {
  r.send(page);
})

app.listen(3000);
