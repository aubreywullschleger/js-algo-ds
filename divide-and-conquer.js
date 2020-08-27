// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found return -1 (binary search)

// // Naive approach, O(n), called linear search:
// function search(sortedArr, num) {
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (arr[i] === val) {
//       return i
//     }
//   }
//   return -1
// }

// binary search (divide and conquer algo pattern) refactor, O(log(n)) time:
function search(sortedArr, num) {
  let min = 0
  let max = sortedArr.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = sortedArr[middle]

    if (currentElement < num) {
      min = middle + 1
    } else if (currentElement > num) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1
