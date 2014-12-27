var express, app, server;

express = require('express');
app = express();

app.get('/hello-world.txt', function(request, response){
    response.send('Hello World!');
});

server = app.listen(1337, function() {
    console.log('Listening on port %d', server.address().port);
});
