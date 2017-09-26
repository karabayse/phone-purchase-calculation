console.log('in client.js');

const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
const spendingThreshold = 200;

var bankAccountBalance = 303.91;
// running total of amount spent
var amountSpent = 0;

function formatAmount(amountSpent) {
  return '$' + amountSpent.toFixed(2);
}

function calculateTax(amountSpent) {
  return amountSpent * taxRate;
}

// continue to purchase phones while you still have money
while (amountSpent < bankAccountBalance) {
  // purchase new phone
  amountSpent = amountSpent + phonePrice;
  // can you afford the accessory?
  if (amountSpent < spendingThreshold) {
    amountSpent = amountSpent + accessoryPrice;
  }
}

// tax calculation
amountSpent = amountSpent + calculateTax(amountSpent);

console.log('Your purchase: ' + formatAmount(amountSpent));
// your purchase: $334.76

// can you afford this purchase?
if (amountSpent > bankAccountBalance) {
  console.log('You cannot afford this purchase. :(');
}
// you cannot afford this purchase
