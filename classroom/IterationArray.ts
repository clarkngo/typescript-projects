const names: string[] = ['Kevin', 'Arthur', 'Evan'];

// The traditional for loop
for (let i = 0, length = names.length; i < length; i++) {
  console.log(names[i]);
}
console.log('----------------');

// For of syntax
for (let name of names) {
  console.log(names);
}
console.log('----------------');

// forEach syntax
names.forEach(name => console.log(name));
console.log('----------------');

// map, syntax, which ca return a new array
const newNames = names.map(name => `${name} Wang`);
console.log(newNames);

// filter method can be used to eliminate some data
const filteredNames = names.filter(name => name === 'Arthur');
console.log(filteredNames);
