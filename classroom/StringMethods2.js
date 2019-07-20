var word = 'I am Great';
var re = /ea/gi;
// find match in regular expressions and replace substring
console.log(word.replace(re, 'oo'));
// search using regular expressions
console.log(word.search(re));
// slice section of string and return new string
console.log(word.slice(5, 10));
// split with separator and return new array
console.log(word.split(" "));
