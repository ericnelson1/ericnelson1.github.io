var express = require('express');
var app = express(); 

var port = 5000;
app.set('port', port);
app.use(express.static('.'));

app.listen(port, function() {
  console.log('running on http://127.0.0.1:' + port); 
});

