interface Animal {
  legs: number;
  hasTail?: boolean;
  move?: () => void;
}

interface Dog extends Animal {
  color: string;
  bark: () => void;
  eat: () => void;
}

const dog: Dog = {
  legs: 4,
  hasTail: true,
  color: 'white',
  move: () => console.log('Move like a dog.'),
  bark: () => console.log('Woof woooooof...'),
  eat: () => console.log('Eating...'),
};
console.log(dog.legs);
console.log(dog.color);
dog.move();
dog.bark();
dog.eat();

