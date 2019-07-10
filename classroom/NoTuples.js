// A funciton return a house's information with [address, city, state, price]
var fetchHouseData = function () { return ['1214 S. Wall St.', 'Seattle', 'WA', 90000]; };
var houseData = fetchHouseData();
// Accidentally change the dat aon a wrong index
houseData[0] = 95000;
console.log(houseData);
