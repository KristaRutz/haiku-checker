const largestPrimeFactor = (input) => {
  // generate an array of prime numbers up to the input

  const isPrime = (testNumb) => {
    for (let i = 2; i < testNumb; i++) {
      if (testNumb % i == 0) {
        return false;
      }
    }
    return true;
  };

  let primes = [];

  //build prime array
  for (let j = 2; j < input; j++) {
    if (isPrime(j) && input % j == 0) {
      primes.push(j);
    }
  }

  return primes;
  //[2, 3, 5, 7, 11...n];

  // which of these are factors of input?
  // let primeFactorsOfInput = [];

  // for (let k = 0; k < primes.length; k++) {
  //   if (input % primes[k] == 0) {
  //     primeFactorsOfInput.push(primes[k]);
  //   }
  // }

  // return primeFactorsOfInput;
};

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(131950));
// console.log(largestPrimeFactor(600851475143));
