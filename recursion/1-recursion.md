# Recursion

- Another way to solve problems non-iterative, but recursively

### Why use Recursion?

- What is recursion

  - A process (a function in our case) that calls itself

- Why know this
  - it's everywhere
  - JSON.parse/stringify
  - document.getElementById, and DOM traversal algos
  - object traversal
  - we will see it w/ more complex data structures
  - it's sometimes cleaner vs iteration

### The Call Stack

- In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked
- It's named the call stack
- It's a _stack_ data structure
- Any time a function is invoked it is placed (pushed) on top of the call stack
- When JS sees the return keyword or when the function ends, the compiler will remove from the top of the stack (pop)
  #### Why do I care
  - you're used to function being pushed on the call stack and popped off when they are done
  - when we write recursive functions, we keep pushing new functions onto the call stack (the same function over and over, waiting to be called)

### How recursive functions work

- Invoke the same function with a different input until you reach your base case

  - Two things must be present
    1. Function that calls itself with a different piece of data (different input)
    2. Stopping point (base case)

  #### Base Case

  - The condition when the recursion ends

  #### Examples

  - First recursive function, see `./countDown.js` or snippet
  - Second recursive function, see `./sumRange.js` or snippet
  - Factorial iteratively - see `./iterativeFactorial.js` or snippet
  - Factorial recursively - see `./recursiveFactorial.js` or snippet
