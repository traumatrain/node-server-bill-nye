const express = require('express');
const cors = require('cors');
const { PORT, IP } = require('./src/config');
const nyeFacts = require('./src/nye-fact-module');
const randomBillFact = require('./src/parse-facts');

const app = express();

app.use(express.json());
app.use(cors());

// GET route random
app.get('/fact', (req, res) => {
  res.send({
    randomFact: randomBillFact(nyeFacts),
  });
});

// GET route all
app.get('/allfacts', (req, res) => {
  res.send({
    nyeFacts,
  });
});

app.listen(PORT, IP, () =>
  console.log(`API server is running at http://localhost:${PORT}...`)
);
