const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.isPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

PrimeChecker.prototype.bindEvents = function () {
  // PubSub.subscribe();
};


module.exports = PubSub;
