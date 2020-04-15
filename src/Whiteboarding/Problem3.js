/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
const fib = (n, a = 0, b = 1) => {
  if (0 < n) {
    fib(--n, b, a + b);
  } else {
    a;
  }
};
