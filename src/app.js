const express = require('express');
const coinController = require('./controllers/coincontroller.js');

const app = express();
const PORT = 3030;

app.use(coinController);

app.listen(PORT, err => {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`App listening on port ${PORT}`);
  }
});
