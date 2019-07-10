// If the parameter is single number return it.
// If it is an array, add all of the number together.
var sum = function (nums) {
    return typeof nums === 'number' ? nums
        : nums.reduce(function (total, num) { return total + num; });
};
console.log(sum(1));
console.log(sum([1, 2, 3]));
