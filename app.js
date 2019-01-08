const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const aggregator = require('./aggregator');

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(aggregator);

app.listen(3000, () => console.log('Aggregator listening on port 3000'));