var person = { name: 'Kevin', age: 18 };
// All operation below will cause error
person.name = 'new name';
person.age = 19;
delete person.name;
delete person.age;
