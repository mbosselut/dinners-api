const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonMiddleware = bodyParser.json();
const cors = require('cors');
const corsMiddleware = cors();
const port = 4000;
const Dinner = require('./dinner/model');

app.use(corsMiddleware);
app.use(jsonMiddleware);

app.get('/dinner', (req, res, next) => {
  Dinner.findAll()
    .then(dinners => res.json(dinners))
    .catch(next);
});

app.post('/dinner', (req, res, next) => {
  console.log(req.body);
  Dinner.create(req.body);
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));
