console.log('in client.js');

const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
const spendingThreshold = 200;

var bankAccountBalance = 303.91;
var amount = 0;

function calculatePhone(amount) {
  return '$' + amount.toFixed(2);
}

function calculateTax(amount) {
  return amount * taxRate;
}
