var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'calender.html'));
});
    
    app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.jpg'));
});


app.get('/ui/A.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'A.html'));
});

app.get('/ui/B.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','B.html'));
});


app.get('/ui/C.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','C.html'));
});


app.get('/ui/D.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','D.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
