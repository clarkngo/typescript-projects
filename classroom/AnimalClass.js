var cat = {
    move: function () { return console.log('Move like a cat.'); },
    purr: function () { return console.log('purr purr...'); },
    eat: function () { return console.log('Eating...'); },
    legs: 4,
    color: 'black',
    hasTail: true
};
console.log(cat.legs);
console.log(cat.color);
cat.move();
cat.purr();
cat.eat();
