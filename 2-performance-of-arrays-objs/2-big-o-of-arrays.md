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