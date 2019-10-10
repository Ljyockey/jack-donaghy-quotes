const express = require('express');
const quotes = require('./quotes');

const app = express();
const port = 8080

app.all('*', (req, res, next) => {
    const timestamp = new Date().getTime();
    console.log(`${timestamp} - ${req.method} request for ${req.path}`);

    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/quotes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  res
    .status(200)
    .send([quotes[randomIndex]])
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
