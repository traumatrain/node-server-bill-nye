function randomBillFact(nyeFacts) {
  const randomNum = Math.floor(Math.random() * nyeFacts.length);
  return nyeFacts[randomNum];
}

module.exports = randomBillFact;
