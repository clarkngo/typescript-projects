class Circle {
  static PI = 3.1415926
  private radius: number;
  constructor(radius: number) { this.radius = radius }

    calculateArea() {
      console.log(`The area is ${Circle.PI * Math.pow(this.radius, 2)}`)
    }
  }

const circleA = new Circle(3);
const circleB = new Circle(6);

circleA.calculateArea();
circleB.calculateArea();

