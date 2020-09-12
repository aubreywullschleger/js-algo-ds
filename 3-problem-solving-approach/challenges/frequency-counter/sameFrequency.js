// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Must be O(n)

function sameFrequency(num1, num2) {
  let num1Str = num1.toString()
  let num2Str = num2.toString()

  let num1FreqCount = {}
  for (let num of num1Str) {
    num1FreqCount[num] ? (num1FreqCount[num] += 1) : (num1FreqCount[num] = 1)
  }
  for (let num of num2Str) {
    if (num1FreqCount[num] && num1FreqCount[num] > 0) {
      num1FreqCount[num] -= 1
    } else {
      return false
    }
  }
  return true
}

// // solution from course:
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }

// sameFrequency(182,281)
// sameFrequency(34, 14)
// sameFrequency(3589578, 5879385)
sameFrequency(22, 222)
