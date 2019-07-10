// A funciton return a house's information with [address, city, state, price]
const fetchHouseData = () => ['1214 S. Wall St.', 'Seattle', 'WA', 90000];

const houseData = fetchHouseData();
// Accidentally change the dat aon a wrong index
houseData[0] = 95000;

console.log(houseData);
