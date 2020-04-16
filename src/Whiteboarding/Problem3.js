/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const largestPrimeFactor = (input) => {
  // generate an array of prime numbers up to the input

  // start with an array of factors
  let potentialPrimeFactors = [];

  const findFactors = (counter = 1, maxFactor = input) => {
    // base case
    if (counter >= maxFactor) {
      return;
    } else if (maxFactor % counter == 0) {
      potentialPrimeFactors.push(counter);
      return potentialPrimeFactors(counter + 1, maxFactor);
    }
  };

  findFactors(input);

  // remove non-primes from array of factors

  for (let i = 2; i < input; i++) {
    for (let j = 0; j <= potentialPrimeFactors.length; j++) {
      if (potentialPrimeFactors[j] % i == 0) {
        potentialPrimeFactors[j] = 0;
      }
    }
  }

  // save the ones that are factors of the input into a new array

  potentialPrimeFactors.sort();
  const highestPrime = potentialPrimeFactors[potentialPrimeFactors.length - 1];
  return highestPrime;
};

console.log(largestPrimeFactor(13195));
