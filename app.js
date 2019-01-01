const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})