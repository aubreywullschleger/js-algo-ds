// fib accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  // check if value is less than or equal to 1 for the first two ns
  if (n === 1 || n === 2) return 1;
  // return call from fib with n - 1 + fib with n - 2
  return fib(n - 1) + fib(n - 2);
}

// return nth number in Fibonacci sequence, fibonacci sequence is whole numbers starting with 2 1s (1, 1) and subsequent numbers are the sum of the previous 2 (1, 1, 2, 3, 5, 8, 13, ...)

// the fuction accepts a single parameter which is the whole number in the fibonacci sequence (ex: the 10th number in the fibonacci sequence is 55, 10 is the parameter)

// the function returns the corresponding whole number in the sequence (same example as above, the 10th number in the fib sequence is 55, 55 is the number returned from the function)

// parameter labeled n, will return a recursive function call

// course solution:
// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }
