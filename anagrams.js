// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearraging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2){
  if(str1.length !== str2.length) {
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