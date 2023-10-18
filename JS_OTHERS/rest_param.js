function computeAverage(a, ...z) {
  console.log(...z);
  //return a + b / 2;
}

computeAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19);

function computeSum(...number) {
  //console.log(typeof number);
  let sum = 0;

  for (const n of number) {
    sum += n;
  }

  return sum;
}

const result1 = computeSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const result2 = computeSum(1, 2);
console.log(result2);
