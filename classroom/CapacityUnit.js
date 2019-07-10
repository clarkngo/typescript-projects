var type = "write";
if (type === "read") {
    // DynamoDB Read Capacity Unit
    console.log("1 RCU is 4 KB per item");
}
else {
    // DynamoDB Write Capacity Unit
    console.log("1 WCU is 1 KB per item");
}
