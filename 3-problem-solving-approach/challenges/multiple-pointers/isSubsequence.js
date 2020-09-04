// Write a function called isSubsequeence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. Must have O(n + m) time complexity, O(1) space complexity

function isSubsequence(str1, str2) {
  let str1Idx = 0
  let str2Idx = 0
  if (!str1) return true
  while (str2Idx < str2.length) {
    if (str1[str1Idx] === str2[str2Idx]) {
      str1Idx++
      str2Idx++
    } else {
      str2Idx++
    }
  }
  return str1Idx === str1.length
}

// // iterative solution from course:
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// // recursive (not O(1) space) solution from course:
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//   return isSubsequence(str1, str2.slice(1))
// }

isSubsequence("hello", "hello world") // true
isSubsequence("sing", "sting") // true
isSubsequence("abc", "abracadabra") // true
isSubsequence("abc", "acb") // false
