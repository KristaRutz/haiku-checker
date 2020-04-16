// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// input: int below 1000
// expected output: sum of all the multiples of 3 or 5 below 1000

const multiplesSum = (sum, number) => {
  if (isNaN(number)) {
    return;
  }
  if (number == 0) {
    console.log("Sum:" + sum);
    return sum;
  }
  if (number % 3 == 0 || number % 5 == 0) {
    console.log(number);
    return multiplesSum(sum + number, number - 1);
  } else {
    return multiplesSum(sum, number - 1);
  }
};

multiplesSum(0, 9);
