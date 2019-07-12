// Create an object with values
var cat = {
    name: 'Mulan',
    age: 8,
    // The value can be a function
    makeSound: function () { return console.log('Mewl~'); }
};
console.log(cat.name);
console.log(cat.age);
cat.makeSound();
// Use an objet as a hashmap
var hashmap = {
    Kevin: '203-555-8876',
    Arthur: '232-555-9987'
};
console.log(hashmap.Kevin);
// Delete one value
delete hashmap.Kevin;
console.log(hashmap.Kevin);
// Use a variable to visit map
var targetName = 'Arthur';
console.log(hashmap[targetName]);
