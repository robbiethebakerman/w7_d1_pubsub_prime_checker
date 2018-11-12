const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
    resultElement.textContent = "That's a prime number alright!";
  } else {
    resultElement.textContent = "That is not a prime number you plonker!";
  }
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const result = event.detail;
    this.displayResult(result);
  });
};

module.exports = ResultView;
