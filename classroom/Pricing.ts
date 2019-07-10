let storage_used:number = 475;
let price:number = 0;
if (storage_used <= 50) {
   price = 0.023;
} else if (storage_used <= 450) {
   price = 0.022;
} else {
   price = 0.022;
}
console.log("S3 storage " + price + " per GB per month");
