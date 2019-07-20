var names = ['Kevin', 'Arthur', 'Evan'];
// The traditional for loop
for (var i = 0, length_1 = names.length; i < length_1; i++) {
    console.log(names[i]);
}
console.log('----------------');
// For of syntax
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(names);
}
console.log('----------------');
// forEach syntax
names.forEach(function (name) { return console.log(name); });
console.log('----------------');
// map, syntax, which ca return a new array
var newNames = names.map(function (name) { return name + " Wang"; });
console.log(newNames);
// filter method can be used to eliminate some data
var filteredNames = names.filter(function (name) { return name === 'Arthur'; });
console.log(filteredNames);
