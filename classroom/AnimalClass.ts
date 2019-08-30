interface Animal {
  legs: number;
  hasTail?: boolean;
  move?: () => void;
}

interface Cat extends Animal {
  color: string;
  purr: () => void;
  eat: () => void;
}

const cat: Cat = {
  move: () => console.log('Move like a cat.'),
  purr: () => console.log('purr purr...'),
  eat: () => console.log('Eating...'),
  legs: 4,
  color: 'black',
  hasTail: true,
};

console.log(cat.legs);
console.log(cat.color);
cat.move();
cat.purr();
cat.eat();
