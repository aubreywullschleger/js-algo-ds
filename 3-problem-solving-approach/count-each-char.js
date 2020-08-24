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

function charCount(str) {
  let charCounts = {}
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      charCounts[char] = ++charCounts[char] || 1
    }
  }
  return charCounts
}

// function to use charCodeAt vs regex
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false
  }
  return true
}
