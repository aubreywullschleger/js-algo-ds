Big O of Arrays vs Objects

- When to use arrays
  - when you need ordered data
  - not the only ordered data structure
  - when you need fast access/insertion and removal (sort of..)

# Big O of Arrays

- Insertion --> depends
  - depends on where data is inserted
    - if on the end (.push) --> O(1)
    - if at beginning (.unshift), array had to be re-indexed --> O(n)
- Removal --> depends
  - depends on where data is removed
    - if at beginning (.shift), array has to be re-indexed --> O(n)
    - if at end (.pop) --> O(1)
- Searching --> O(n)
- Access --> O(1)

# Big O of Array Methods

- push --> O(1)
- pop --> O(1)
- shift --> O(n)
- unshift --> O(n)
- concat --> O(n)
  - as the number of arrays grow that you are merging, time it takes grows in a linear way (grows in proportion with the total size of the new array)
- slice --> O(n)
  - grows in proportion with the size of the copy we're trying to copy
- splice --> O(n)
  - ex inserting at middle of array, or beginning, we have to re-index
- sort --> O(n\*log n)
  - time to sort is larger than O(n) b/c comparing, inserting, looping
- forEach/map/filter/reduce/etc --> O(n)
  - loop over each element, so based on number of elements
