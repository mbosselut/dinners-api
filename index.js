const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonMiddleware = bodyParser.json();
const cors = require('cors');
const corsMiddleware = cors();
const port = process.env.PORT || 4000;
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

app.delete('/dinner/:dinnerId', (req, res, next) => {
  Dinner.findOne({ where: { id: parseInt(req.params.dinnerId) } })
    .then(dinner => dinner.destroy())
    .then(() => res.json(`Dinner with id ${req.params.dinnerId} was deleted`))
    .catch(next);
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));
