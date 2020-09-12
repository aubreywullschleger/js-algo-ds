# Algorithms and Problem Solving Patterns/Strategies

## Basic Approach

- What is an Algorithm?
  - a process or set of steps to accomplish a certain task
    - ex: mathematical steps to solve a math problem, calculate 1st 100 prime numbers
- Why do I need to know this?
  - almost everything we do in programming involves some kind of algorithm
  - it's the foundation for being a successful problem solver and developer
  - also interviews!
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

     - example:

       ```
       // write a function which takes two numbers and returns their sum

       // 1. Can I restate the problem in my own words?
       // write a function that adds two numbers, implement addition

       // 2. What are the inputs the go into the problem?
       // - ints?, floats?, what about string for large numbers?

       // 3. What are the outputs that should come form the solution to the problem?
       // - int? float? string?

       // 4. Can the outputs be determned from the inputs? Do I have enough information to solve the problem?
       // what about default parameters?

       // 5. How should I label the important pieces of data that are a part of the problem?
       // name function add, numOne, numTwo, return sum
       ```

  2. Explore Concrete Examples

     - coming up w/ example can help you wunderstand the problem better
     - examples also provide sanity checks that your eventual solution works how it should
       - ex: user stories, unit tests
     - How to come up with concrete examples:
       1. start w/ simple examples, write down 2-3 simple examples with an input and the output, easiest use cases
       2. progress to more complex examples
       3. explore examples with empty inputs
       4. explore examples with invalid inputs
     - example:

       ```
       // Write a function which takes in a string and returns counts of each character in the string

       // Problem solving strategies:

       // step 2 (after understanding the problem) concrete examples:

       // // simple examples
       // charCount("aaaa") // {a: 4}
       // charCount("hello") // {h: 1, e: 1, l: 2, o: 1}
       // //question for more info, should we start with our object having 0 for the count of each letter a-z

       // // more complex examples
       // charCount("my phone number is 123456")
       // // do we want to account for spaces, for numbers, symbols

       // charCount("hello Hi")
       // // do we account for both upper and lowercase

       // //empty inputs
       // charCount("")
       // //what should be returned

       // //invalid inputs
       // charCount(123)
       // //what should be returned
       ```

  3. Break it Down

     - take steps of problem and write them down, explicityly write out the steps you need to take

       - this forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (like language syntax)
       - helps figure out any lingering questions/ things you aren't confident about
       - example, following the example from step 2:

         ```
         // step 3, break it down:

         // function charCount(str) {
         //     // do something
         //     // return an object with keys that are lowercase alphanumeric characters in the string;
         //     // values should be the counts for those characters
         // }

         // function charCount(str) {
         //     // make object to return at end
         //     // loop over string, for each char
         //         // check if char is alphanumeric
         //             // convert to lowercase
         //             // if lowercase char is a key in obj, add 1 to count
         //             // if lc char is not in obj, add it and set value to 1
         //         // if char is not alphanumeric continue loop
         //     // return object at end
         // }
         ```

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

       - example, following step 2's example:

         ```
         // // step 4, solve/simplify:

         // function charCount(str) {
         //     // make object to return at end
         //     let charCounts = {}
         //     // loop over string, for each char
         //     for (let i = 0; i < str.length; i++) {
         //         // check if char is alphanumeric
         //             // if char is not alphanumeric continue loop

         //         // convert to lowercase
         //         let char = str[i].toLowerCase()

         //         // if lowercase char is a key in obj, add 1 to count
         //         if(charCounts[char] > 0) {
         //             charCounts[char]++
         //         }
         //         // if lc char is not in obj, add it and set value to 1
         //         else {
         //             charCounts[char] = 1
         //         }
         //     }
         //     // return object at end
         //     return charCounts
         // }
         ```

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
     - example:
          ```
          // step 5, refactor:

          // function charCount(str) {
          //     let charCounts = {}
          //     //instead of for loop use for of
          //     for (let i = 0; i < str.length; i++) {
                      // is it better to lowercase everything?
          //         let char = str[i].toLowerCase()
                      // not sure how efficient this regex is, although useful, would mention in interview that not sure about time complexity
                      // instead we can use .charCodeAt(0) check if valid char code (time complexity is better)
          //         if(/[a-z0-9]/.test(char)){
                        // try to combine in single line
          //             if(charCounts[char] > 0) {
          //                 charCounts[char]++
          //             } 
          //             else {
          //                 charCounts[char] = 1
          //             } 
          //         }
          //     }           
          //     return charCounts
          // }

          // final refactor

          function charCount(str) {
              let charCounts = {}
              for (let char of str) {
                  if(isAlphaNumeric(char)){
                      char = char.toLowerCase()
                      charCounts[char] = ++charCounts[char] || 1
                  }
              }           
              return charCounts
          }

          // function to use charCodeAt vs regex
          function isAlphaNumeric(char) {
              const code = char.charCodeAt(0)
              if(!(code > 47 && code < 58) && //numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                    return false
                }
                return true
          }
          ```
