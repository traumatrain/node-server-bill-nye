require('dotenv').config();

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '0.0.0.0';

module.exports = {
  PORT,
  IP,
};
