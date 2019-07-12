var dog = {
    legs: 4,
    hasTail: true,
    color: 'white',
    move: function () { return console.log('Move like a dog.'); },
    bark: function () { return console.log('Woof woooooof...'); },
    eat: function () { return console.log('Eating...'); }
};
console.log(dog.legs);
console.log(dog.color);
dog.move();
dog.bark();
dog.eat();
