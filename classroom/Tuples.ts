type HouseDataType = [string, string, string, number];
// A funciton return a house's information with [address, city, state, price]
const fetchHouseData = (): HouseDataType => ['1214 S. Wall St.', 'Seattle', 'WA', 90000];

const houseData = fetchHouseData();
// Accidentally change the dat aon a wrong index
houseData[3] = 95000;
