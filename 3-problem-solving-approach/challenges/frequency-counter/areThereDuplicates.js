// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. This can be solved using frequency counter or multiple pointers pattern

// frequency counter
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

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates("a", "b", "c", "a") // true
