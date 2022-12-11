'use strict';

const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
  console.log('listening on port ' + port);
});
