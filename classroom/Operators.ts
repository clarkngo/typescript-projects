let num1:number = 0;
let num2:number = 2;
let sum:number;
num1++;
num2--;

sum = -num1 + -num2;
console.log(sum === 2);
console.log(sum < 0 && sum > - 10);
console.log(sum > 0 || sum > - 10);
console.log(sum === -2);
