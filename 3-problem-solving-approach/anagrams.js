// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearraging the letters of another, such as cinema, formed from iceman.

// // solution from course:
// function validAnagram (first, second) {
//   if(first.length !== second.length) {
//     return false
//   }

//   let lookup = {}

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i]
//     //if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
//   }

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i]
//     //can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false
//     } else {
//       lookup[letter] -=1
//     }
//   }
//   return true
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  let str1Freq = {}
  let str2Freq = {}

  for (let char of str1) {
    str1Freq[char] = (str1Freq[char] || 0) + 1
  }

  for (let char of str2) {
    str2Freq[char] = (str2Freq[char] || 0) + 1
  }

  for (let char in str1Freq) {
    if (!(char in str2Freq)) {
      return false
    }
    if (str2Freq[char] !== str1Freq[char]) {
      return false
    }
  }

  return true
}

validAnagram("", "") // true
validAnagram("aaz", "zza") // false
validAnagram("anagram", "nagaram") // true
validAnagram("rat", "car") // false
validAnagram("awesome", "awesom") // false
validAnagram("qwerty", "qeywrt") // true
validAnagram("texttwisttime", "timetwisttext") // true
