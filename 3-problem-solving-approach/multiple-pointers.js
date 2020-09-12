// Write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// // naive solution
// // time complexity: O(n^2), quadratic time
// // space complexity: O(1)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// refactored using multiple pointers
// time complexity: O(n), space complexity O(1)
function sumZero(arr) {
  let leftIdx = 0
  let rightIdx = arr.length - 1
  while (leftIdx < rightIdx) {
    let sum = arr[leftIdx] + arr[rightIdx]
    if (sum === 0) {
      return [arr[leftIdx], arr[rightIdx]]
    } else if (sum > 0) {
      rightIdx--
    } else {
      leftIdx++
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
