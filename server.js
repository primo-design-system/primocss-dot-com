var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8000
app.use(express.static('public'));

app.listen(8000);

console.log("Running at Port 8000 http://localhost:8080");
