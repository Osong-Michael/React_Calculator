const Big = require('big.js');

const operate = (a, b, operation) => {
  const num1 = new Big(a);
  const num2 = new Big(b);
  switch (operation) {
    case '+':
      return num1.plus(num2).toString();
    case '&times;':
      return num1.times(num2).toString();
    case '&minus;':
      return num1.minus(num2).toString();
    case '%':
      return (num1.times(num2)).div(100).toString();
    case '÷':
      return num1.div(num2).toString();
    default:
      return 0;
  }
};

export default operate;
