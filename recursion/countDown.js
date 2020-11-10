function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// // vs iteratively
// function countDown(num) {
//   for (let i = 0; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('all done');
// }

countDown(5);
