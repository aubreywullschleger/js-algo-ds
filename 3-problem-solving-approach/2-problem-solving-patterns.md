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
  - see Same snippet (or ./frequency-counter.js) and anagrams snippet (./anagrams.js)
- Idea behind frequency counter - usually use an object to construct a profile/classify/a way of breaking down the contents of an array/string/linear structure and then able to compare that object to another object that was constructed from string/array, used when trying to compare/check if individual pieces of one array/string are in another array/string (or are squared, etc)

### Multiple Pointers

- no official name for it
- creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
- very efficient for solving problems with minimal space complexity
  - have a linear structure, array, string, etc, we are searching for something that meets a condition
  - Example problem:
    - see sumZero snippet (or ./multiple-pointers.js) and countingUniqueValues snippet (./countingUniqueValues.js)

### Sliding Window

- useful for keeping track of a subset of data in an array/string, etc.
- useful when we have a set of data like array/string and we're looking for a subset of that data that is continuous in some way
  - ex: find the longest sequence of unique characters in "hellothere"
- This pattern involves creating a window which can either be an array or number from one position to another
- depending on a certain condition, the window either increases or closes (and a new window is created)
  - Example problem:
    - see maxSubarraySum snippet or (./sliding-window.js)

### Divide and Conquer

- documented name
- lots of divide and conquer in sorting algos and searching (merge and quick sort, and binary search, etc)
- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- this pattern can tremendously decrease time complexity
- Example:
  - classic example is binary search
  - ./divide-and-conquer.js
