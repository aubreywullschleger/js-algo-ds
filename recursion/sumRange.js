function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

// base case: if (num === 1) return 1;
// different input (used to call recursive function): num-1
// recursive call return num + sumRange(num - 1);
