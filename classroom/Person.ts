// User public key word to make the property visible anywhere
class Person {
  // public name: string;
  protected name: string;
  public constructor (name: string) { this.name = name }
  public sayName () {
    console.log(`My name is ${this.name}`);
  }
}

const kevin = new Person('Kevin');

// Property 'name' is protected and
// only accessible within class 'Person' and its subclasses.
kevin.name = 'Arthur';

class Kevin extends Person {
  constructor() { super('Kevin') }
  changeName(newName: string) { this.name = newName }
}

// kevin.sayName();
// // The name property can be changed from outside
// kevin.name = 'Arthur';
// // Kevin will get a different name
// kevin.sayName();
