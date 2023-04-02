const num1 = 10;
const num2 = 20;
let value;

value = num1 + num2;
value += 100;
value = 5 % 2;

value++;
value--;
--value;
++value;

value = 0.6 + 0.7;
//value = parseFloat(value.toFixed(1));

// Math

value = Math.PI;
value = Math.random();
value = Math.round(2.4);
value = Math.floor(2.9);
value = Math.min(2, 31, 34, 1, 0);

value = Math.floor(ath.random() * 10 + 1);

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'green', 'orange'];
value = Math.floor(Math.random() * arr.length);
console.log(value);