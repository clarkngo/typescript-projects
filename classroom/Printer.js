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
var Printer = /** @class */ (function () {
    function Printer() {
    }
    // This function can be shared by all children classes
    Printer.prototype.powerOn = function () { console.log('Power on.'); };
    return Printer;
}());
var LaserPrinter = /** @class */ (function (_super) {
    __extends(LaserPrinter, _super);
    function LaserPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaserPrinter.prototype.print = function () { console.log("I will use laser to print."); };
    return LaserPrinter;
}(Printer));
var InkjetPrinter = /** @class */ (function (_super) {
    __extends(InkjetPrinter, _super);
    function InkjetPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InkjetPrinter.prototype.print = function () { console.log("I will use ink to print."); };
    return InkjetPrinter;
}(Printer));
var printerA = new LaserPrinter();
var printerB = new InkjetPrinter();
printerA.powerOn();
printerB.print();
printerA.powerOn();
printerB.print();
