const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const apiRequester = require('./src/services/apiRequester.js')
const POKEAPI = 'https://pokeapi.co/api/v2/pokemon/'
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

app.get('/:query', (req, res) => {
  apiRequester.get(POKEAPI + req.params.query)
    .then(response => res.send({response: response}))
});