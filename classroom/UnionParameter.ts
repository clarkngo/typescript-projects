// If the parameter is single number return it.
// If it is an array, add all of the number together.
const sum = (nums: number | number[]): number =>
  typeof nums === 'number' ? nums
                           : nums.reduce((total, num) => total + num);

console.log(sum(1));
console.log(sum([1,2,3]));
