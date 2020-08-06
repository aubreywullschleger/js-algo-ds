Why do we need Big-O Notation??
  - How do we know what the best way to solve a problem is out of the numerous solves it has?
  - big-o is a way to compare/classify the different solves to a programming problem/code performance
  - big-o gives us a numeric representation of the performance of code
  
  - Why does it matter what's best?
    - depending on context/project the best solution may be to just get the code to work
    - otherwise (interviews/large project/lots of data - where performance matters), we need the vocab to talk about code performance
    - useful for talking about trade-offs between approaches
    - identifying inefficient code/applications

Real Intro to Big O
  - Big O Notation is a way to formalize fuzzy counting
  - it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
  - describing how the input size changes the runtime trend
  - Definition:
    - We say that an algorithm is O(f(n)) (said as big o f of n) if the number of simple operations the computer has to do is eventually less than a constant time f(n), as n increases
      - f(n) could be linear (f(n) = n) --> as the input scales, the runtime scales
      - f(n) could be quadratic (f(n) = n**2) --> as the input grows, the runtime squares
      - f(n) could be constant (f(n) = 1) as the input grows, runtime doesn't change
      - or f(n) could be something entirely different
    - as input grows how does runtime change? (worst case senario) this is what Big O Notation gives us language/tools to talk about
    - Examples:
      - AddUpTo(n) (Add2) is O(1) (has a bi O of 1) its constant, it always has 3 operations
      - AddUpTo(n) (Add1 snippet) is O(n) (O of n) number of operations is (eventually) bounded by a multiple of n (ex: 10n) 
        - the magnitude doesn't matter, ex: in our Add1 we had 5n + 2 - 5 operation for each n plus 2 constant operations, it's still considered O(n)
      - countUpAndDown (snippet) has two separate for loops without other operations inside, it's O(n)
      - printAllPairs (snippet) (nested loops) outer loop makes it O(n), inner loop is also O(n), O(n) operation inside an O(n) operation makes it O(n*n) (O(n^2) o of n squared), as n grows, the runtime grows at the rate of n**2
