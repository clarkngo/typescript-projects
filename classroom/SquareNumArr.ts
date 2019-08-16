var numbers = [1, 9, 7, 3]; //INPUT
var sqrs = numbers.map(x => Math.pow(x,2)).sort(function(a, b){return a-b});
console.log("square of numbers are : " + sqrs );
