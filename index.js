const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonMiddleware = bodyParser.json();
const cors = require('cors');
const corsMiddleware = cors();
const port = 4000;
const User = require('./dinner/model');

app.use(corsMiddleware);
app.use(jsonMiddleware);

app.listen(port, () => console.log(`Server listening on port ${port}...`));
