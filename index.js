const express = require('express');
const cors = require('cors');
const { PORT, IP } = require('./src/config');

const nyeFacts = require('./nye-fact-module');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, IP, () =>
  console.log(`API server is running at http://localhost:${PORT}...`)
);
