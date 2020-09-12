// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. This can be solved using frequency counter or multiple pointers pattern

// frequency counter:
function areThereDuplicates(...args) {
  let argCount = {}
  for (let arg of args) {
    argCount[arg] ? (argCount[arg] += 1) : (argCount[arg] = 1)
    if (argCount[arg] > 1) {
      return true
    }
  }
  return false
}

// // frequency counter solution from course:
// function areThereDuplicates() {
//   let collection = {}
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true
//   }
//   return false
// }

// // multiple pointers solution from course:
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a, b) => a > b)
//   let start = 0
//   let next = 1
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// // one liner solution from course using Set:
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length
// }

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates("a", "b", "c", "a") // true
