// Implement a funciton called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr) {
  let leftIdx = 0
  let rightIdx = 1
  let uniqueValues = 1
  while (rightIdx <= arr.length) {
    if (arr[leftIdx] === arr[rightIdx]) {
      rightIdx++
    } else {
      uniqueValues += 1
      leftIdx++
      arr[leftIdx] = arr[rightIdx]
      rightIdx++
    }
  }
  return uniqueValues
}
           
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4
