var express = require('express');
var app = express();

app.get('/hello-world.txt', function(request, response){
    response.send('Hello World!');
});

var server = app.listen(1337, function() {
    console.log('Listening on port %d', server.address().port);
});

