const numbers = [10, 13, 20, 25, 38, 35, 40];

const greatValue = numbers.filter(function (num) {
  return num >= 25;
});
console.log(greatValue);

const divisibleByFive = numbers.filter(function (num) {
  return num % 5 === 0;
});
console.log(divisibleByFive);

const squares = numbers.map(function (num) {
  return num ** 2;
});

console.log(squares);

const multiplication = numbers.map(function (num) {
  return num * 2;
});

console.log(multiplication);

const fAndM = numbers
  .filter(function (num) {
    return num >= 20;
  })
  .map(function (num) {
    return num ** 2;
  });
console.log(fAndM);

const fAndM2 = numbers
  .filter(function (num) {
    return num % 5 === 0;
  })
  .map(function (num) {
    return num * 3;
  });
console.log(fAndM2);
