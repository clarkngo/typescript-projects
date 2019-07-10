var global_num = 4          //global variable
class Numbers {
   num_val = 10;             //class variable
   static sval = 20;         //static field

   storeNum():number {
      var local_num = 50;    //local variable
      return local_num;
   }
}
console.log("Global num: "+global_num)
console.log("Static num: "+Numbers.sval)
var obj = new Numbers();
console.log("Class num: "+obj.num_val)
console.log("Local num: "+obj.storeNum())
