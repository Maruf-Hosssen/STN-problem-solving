// problem 6;
// Array Reduction

const numbers = [1, 2, 3, 4, 5];

const sumEvenNumbers = (nums) => {
  return nums.reduce((a, c) => {
    if (c % 2 === 0) {
      return a + c;
    } else {
      return a;
    }
  }, 0);
};

const sum = sumEvenNumbers(numbers);
console.log(sum);
