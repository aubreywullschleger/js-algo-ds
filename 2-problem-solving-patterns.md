# Strategies/Archtypes - specific (named) problem solving strategies

How do you improve?
  1. Devise a plan for solving problems (./1-problem-solving-steps.md)
  2. Master common problem solving patterns (this file)

## Problem Solving Patterns (not all, just some)
  - some pattern names/concepts
    - frequency counter
    - multiple pointers
    - sliding window
    - divide and conquer
    - dynamic programming
    - greedy algorithms
    - backtracking
    - and many more!
  
### Frequency Counters
  - not called anything offically
  - this pattern uses objects or sets to collect values/frequencies of values
  - this can often avoid the need for nested loops or O(n^2) quadratic time operations with arrays/strings
  - usually O(n) time
  - Example problem:
    -  see Same snippet (or ./frequency-counter.js)
 - Idea behind frequency counter - usually use an object to construct a profile/classify/a way of breaking down the contents of an array/string/linear structure and then able to compare that object to another object that was constructed from string/array
