# Algorithms and Problem Solving Patterns/Strategies

## Basic Approach
  - What is an Algorithm?
    - a process or set of steps to accomplish a certain task
      - ex: mathematical steps to solve a math problem, calculate 1st 100 prime numbers
  - Why do I need to know this?
    -  almost everything we do in programming involves some kind of algorithm
    -  it's the foundation for being a successful problem solver and developer
    -  also interviews!
  - How do you improve?
    - devise a plan for solving problems
    - master common problem solving patterns
  
- ### Problem solving strategies:
    - most of these strategies are from _How To Solve It_ by George Polya
    - check snippet: count each char (or ./count-each-char.js) 
    1. Understand the Problem
       1. Can I restate the problem in my own words?
       2. What are the inputs that go into the problem?
       3. What are the outputs that should come from the solution to the problem?
       4. Can the outputs be determined from the inputs? In other words, do I have enough info to solve the problem? (you may not be able to answer this question until you start solving the problem, but it's still worth it to consider early on)
       5. How should I label the important pieces of data that are a part of the problem?
    2. Explore Concrete Examples
       - coming up w/ example can help you wunderstand the problem better
       - examples also provide sanity checks that your eventual solution works how it should
         - ex: user stories, unit tests
       - How to come up with concrete examples:
         1. start w/ simple examples, write down 2-3 simple examples with an input and the output, easiest use cases
         2. progress to more complex examples
         3. explore examples with empty inputs
         4. explore examples with invalid inputs
    3. Break it Down
       - take steps of problem and write them down, explicityly write out the steps you need to take
         - this forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (like language syntax)
         - helps figure out any lingering questions/ things you aren't confident about
    4. Solve/Simplify
       - solve the problem if you can
       - if you can't solve a simpler problem
         - trying to ignore the part that is giving you a hard time
         - but why do this? 
           - you want to have something to show for yourself
           - it's common that you'll gain insight into the harder part of a problem
       - To Simplify:
         1. find the core difficulty in what you're trying to do
         2. temporarily ignore that difficulty
         3. write a simplified solution
         4. incorporate that difficulty back in 
    5. Look Back and Refactor
       - refactoring questions:
         - Can you check the result?
           - make sure code works
         - Can you derive the result differently?
           - different solutions/approaches not first thought of
         - Can you understand it at a glance?
           - how intuitive is your solution? 
         - Can you use the result or method for some other problem?
           - is this problem similar to other problems you've encountered/can it be used for some other problem?
         - Can you improve the performance of your solution?
           - how can we make time/space complexity better?
         - Can you think of other ways to refactor?
           - does it follow company guidelines/style guide? does it follow language conventions? formatting?
         - How have other people solved this problem? 
           - in an interview (at the end) ask what other approaches candidates took/what did I miss/how have you seen people solve this?

## Strategies/Archtypes - specific (named) strategies