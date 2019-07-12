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
// Define an SuperHero class
var SuperHero = /** @class */ (function () {
    function SuperHero(name, isEvil) {
        this.name = name;
        this.isEvil = isEvil;
    }
    SuperHero.prototype.selfIntroduce = function () {
        console.log("I am " + this.name + " and I will " + (this.isEvil ? 'rule the world' : 'protect the peace') + ".");
    };
    return SuperHero;
}());
var JeanGrey = new SuperHero('Jean Grey', true);
var Batman = new SuperHero('Bastman', false);
JeanGrey.selfIntroduce();
Batman.selfIntroduce();
var DoctorStrange = /** @class */ (function (_super) {
    __extends(DoctorStrange, _super);
    function DoctorStrange() {
        return _super.call(this, 'Doctor Strange', false) || this;
    }
    DoctorStrange.prototype.usePower = function () {
        console.log('Time is stopped.');
    };
    return DoctorStrange;
}(SuperHero));
var strange = new DoctorStrange();
strange.selfIntroduce();
strange.usePower();
