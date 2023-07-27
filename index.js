const express = require('express');
const cors = require('cors');
const { PORT, IP } = require('./src/config');

const app = express();

const nyeFacts = require('./nye-fact-module');

const randomFacts = require('./parse-facts');

// GET route?
nyeFacts.get('/fact', (req, res) => {
  res.send(randomFacts);
});

app.use(express.json());
app.use(cors());

app.listen(PORT, IP, () =>
  console.log(`API server is running at http://localhost:${PORT}...`)
);
