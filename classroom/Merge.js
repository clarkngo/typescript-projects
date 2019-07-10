var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello !!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
// I'm a single line commment - PLEASE REMOVE ME
/*
These are multi-line comments - PLEASE REMOVE ME
*/
console.log("No comments.");
