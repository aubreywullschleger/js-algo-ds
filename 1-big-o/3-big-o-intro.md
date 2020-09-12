Why do we need Big-O Notation??

- How do we know what the best way to solve a problem is out of the numerous solves it has?
- big-o is a way to compare/classify the different solves to a programming problem/code performance
- big-o gives us a numeric representation of the performance of code

- Why does it matter what's best?
  - depending on context/project the best solution may be to just get the code to work
  - otherwise (interviews/large project/lots of data - where performance matters), we need the vocab to talk about code performance
  - useful for talking about trade-offs between approaches
  - identifying inefficient code/applications

# Real Intro to Big O

- Big O Notation is a way to formalize fuzzy counting
- it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
  - this is **time complexity**: how can we analyze the rentime of an algorithm as the size of the inputs increases
- describing how the input size changes the runtime trend
- Definition:
  - We say that an algorithm is O(f(n)) (said as big o f of n) if the number of simple operations the computer has to do is eventually less than a constant time f(n), as n increases
    - f(n) could be linear (f(n) = n) --> as the input scales, the runtime scales
    - f(n) could be quadratic (f(n) = n\*\*2) --> as the input grows, the runtime squares
    - f(n) could be constant (f(n) = 1) as the input grows, runtime doesn't change
    - or f(n) could be something entirely different
  - as input grows how does runtime change? (worst case senario) this is what Big O Notation gives us language/tools to talk about
  - Examples:
    - AddUpTo(n) (Add2) is O(1) (has a bi O of 1) its constant, it always has 3 operations
    - AddUpTo(n) (Add1 snippet) is O(n) (O of n) number of operations is (eventually) bounded by a multiple of n (ex: 10n)
      - the magnitude doesn't matter, ex: in our Add1 we had 5n + 2 - 5 operation for each n plus 2 constant operations, it's still considered O(n)
    - countUpAndDown (snippet) has two separate for loops without other operations inside, it's O(n)
      ```
      function countUpAndDown(n) {
          console.log("Going up!")
          for(let i = 0; i < n; i++) {
              console.log(i)
          }
          console.log("At the top!\nGoing down...");
          for(let j = n-1; j >=0; j--) {
              console.log(j);
          }
          console.log("Back down. Bye!");
      }
      //O(n) two for loops w/nothing extra inside loops
      ```
    - printAllPairs (snippet) (nested loops) outer loop makes it O(n), inner loop is also O(n), O(n) operation inside an O(n) operation makes it O(n\*n) (O(n^2) o of n squared), as n grows, the runtime grows at the rate of n\*\*2
      ```
      function printAllPairs(n) {
          for (var i = 0; i < n; i++) {
              for (var j = 0; j < n; j++) {
                  console.log(i, j)
              }
          }
      }
      ```

Simplifying Big O Expressions

- rules of thumb (which are consequences of the definition of big o notation, we want the broadest big picture view of time complexity, these don't always work but are a good starting point):
  1. Arithmetic operations are constant
  2. variable assignment is constant
  3. accessing elements in an array (by index) or object (by key) is constant
  4. in a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop
  - Note:
    - constants don't matter, ex: O(2n) --> O(n), O(500) --> O(1), O(13n^2) --> O(n^2)
    - smaller terms don't matter, ex: O(n + 10) --> O(n), O(1000n + 50) --> O(n), O(n^2 + 5n + 8) --> O(n^2)

Space Complexity

- **space complexity**: analyzing the space that an algorithm takes up as the inputs increase; how much additional memory do we need to allocat in order to run the code in our algorithm?

  - (not sure what name there is for this space complexity, but) as n grows we assume the inputs grow (we will not focus on this one)
  - **auxiliary space complexity**: refers to space required by the algorithm, not including space taken up by the inputs (we will focus on this one, which focuses on what is happening inside the algorithm)

- Rules of thumb:
  1. most primitives (bools, nums, undefined, null) are constant space
  2. Strings require O(n) space (where n is the string length)
  3. reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
  - though for a function that loops through an array, keeps track of a total variable and adds each number in the array to the total would have O(1) space complexity, constant (as the only space would be the total and the loop start, so 2 constants)

Logarithms

- What's a logarithm?
  - the inverse of exponentiation
    - logbase(value) = exponent --> base ^ exponent = value
    - ex: logbase2(8) = 3 (read as log base 2 of 8 equals 3) --> 2^3 = 8
      - calculating 2 to what power equals 8
  - we are thinking bigger picture/fuzzy graph (as n gets closer to infinity) so we'll omit the base, log === logbase2, we care about the general trend
  - log by itself is not a mathmatical operation, it needs a base, log is shorthand
  - rule of thumb for time/space complexity:
    1. the logrithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one
    - ex: 8/2 is greater than 1, 4/2 is greater than 1, 2/2 is one so we divided 3 times, the answer is 3
    - if you have O(log n) it's great
    - if you have O(nlog n) it's better than quadratic time complexity (O(n^2)) but not as good as O(n)
    - we will see this in certain searching algos
    - efficient sorting algorithms involve logarithms
    - recursion sometimes involves lagarithmic space complexity

Review:

- to analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear, quadratic, constant, etc)
- the time or space complexity (as measured by Big O) depends only on the algorithm, not on the hardware used to run the algorithm
- Big O Notation is everywhere, so we need to get a lot of practice!
