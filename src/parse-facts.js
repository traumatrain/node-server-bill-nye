// pulls a random fact from nyeFacts array
function randomBillFact(nyeFacts) {
  const randomNum = Math.floor(Math.random() * nyeFacts.length);
  return nyeFacts[randomNum];
}

// exports random fact to index
module.exports = randomBillFact;
