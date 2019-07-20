// Sorting a number array
var numArr = [2, 3, 4, 6, 1, 0];
// Sorting in ascending order
numArr.sort(function (previous, next) { return previous - next; });
console.log(numArr);
// Sorting in descending order
numArr.sort(function (previous, next) { return next - previous; });
console.log(numArr);
// Sorting a date array
var dateArr = [new Date('2019-01-01'), new Date('2019-02-01'), new Date('2019-01-03')];
console.log(dateArr.sort(function (previousDate, nextDate) { return previousDate.getTime() - nextDate.getTime(); }));
