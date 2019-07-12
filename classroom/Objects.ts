// Create an object with values
const cat = {
  name: 'Mulan',
  age: 8,
  // The value can be a function
  makeSound: () => console.log('Mewl~'),
};

console.log(cat.name);
console.log(cat.age);
cat.makeSound();

// Use an objet as a hashmap
const hashmap = {
  Kevin: '203-555-8876',
  Arthur: '232-555-9987',
};
console.log(hashmap.Kevin);
// Delete one value
delete hashmap.Kevin;
console.log(hashmap.Kevin);

// Use a variable to visit map
const targetName = 'Arthur';
console.log(hashmap[targetName]);

