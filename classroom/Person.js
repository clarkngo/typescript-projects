var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// User public key word to make the property visible anywhere
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    ;
    Person.prototype.sayName = function () {
        console.log("My name is " + this.name);
    };
    return Person;
}());
var kevin = new Person('Kevin');
kevin.name = 'Arthur';
var Kevin = /** @class */ (function (_super) {
    __extends(Kevin, _super);
    function Kevin() {
        return _super.call(this, 'Kevin') || this;
    }
    Kevin.prototype.changeName = function (newName) { this.name = newName; };
    return Kevin;
}(Person));
// kevin.sayName();
// // The name property can be changed from outside
// kevin.name = 'Arthur';
// // Kevin will get a different name
// kevin.sayName();
