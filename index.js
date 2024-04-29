import express from 'express';

const app = express();


app.listen(8000, function() {

  console.log('Server is running on http://localhost:8000');

});

app.get('/', function(req, res) {

  res.send('Hello World!');


});