const type:string = "write";
if (type === "read") {
   // Read Capacity Unit
   console.log("1 RCU is 4 KB per item");
} else {
   // Write Capacity Unit
   console.log("1 WCU is 1 KB per item");
}
