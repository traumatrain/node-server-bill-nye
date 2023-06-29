const express = require('express');
const cors = require('cors');
const nyeFacts = require('./nye-fact-module');
const { PORT, IP } = require('./src/config');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, IP, () =>
  console.log(`API server is running at http://localhost:${PORT}...`)
);
