Timing Code
- we can compare functions (code) to determine which is better, but what does better mean?
  - when we're comparing code we look for speed, memory usage, readability, and succinctness/minimal characters

  - Evaluating speed:
    - we can use permormance.now() (also in snippets on Add1 and Add2)
```
function addUpTo(n) {
  let total = 0;

  for(let i = 1; i <= n; i++) {
    total += i;
  }

  return total
}

let t1 = performance.now();
addUpTo(1000000000)

let t2 = performance.now()
console.log(`time elapsed: ${(t2 - t1)/1000} seconds`)
```