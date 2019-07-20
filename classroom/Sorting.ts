// Sorting a number array
const numArr: number[] = [2, 3, 4, 6, 1, 0];

// Sorting in ascending order
numArr.sort((previous, next) => previous - next);
console.log(numArr);

// Sorting in descending order
numArr.sort((previous, next) => next - previous);
console.log(numArr);

// Sorting a date array
const dateArr: Date[] = [new Date('2019-01-01'), new Date('2019-02-01'), new Date('2019-01-03')];
console.log(dateArr.sort((previousDate, nextDate) => previousDate.getTime() - nextDate.getTime()));
