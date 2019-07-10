var global_num = 4; //global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 10; //class variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 50; //local variable
        return local_num;
    };
    Numbers.sval = 20; //static field
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log("Static num: " + Numbers.sval);
var obj = new Numbers();
console.log("Class num: " + obj.num_val);
console.log("Local num: " + obj.storeNum());
