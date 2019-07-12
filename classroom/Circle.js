var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        console.log("The area is " + Circle.PI * Math.pow(this.radius, 2));
    };
    Circle.PI = 3.1415926;
    return Circle;
}());
var circleA = new Circle(3);
var circleB = new Circle(6);
circleA.calculateArea();
circleB.calculateArea();
