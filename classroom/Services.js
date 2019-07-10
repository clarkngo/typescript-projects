var product = "Kinesis";
switch (product) {
    case "S3": {
        console.log("Storage Service");
        break;
    }
    case "EC2": {
        console.log("Compute Service");
        break;
    }
    case "Kinesis": {
        console.log("Analytics Service");
        break;
    }
    default: {
        console.log("Not a valid service");
        break;
    }
}
