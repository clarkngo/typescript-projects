// Use interface for parameter
interface Car {
  color: string;
  maxSpeed: number;
  airBags?: number;
}

const checkCarFn = (car: Car) => {
  console.log(`The max speed for this ${car.color} car is ${car.maxSpeed} m/h.`);
  if (car.airBags) console.log(`Btw: It also has ${car.airBags} air bags`);
};
checkCarFn({ color: 'red', maxSpeed: 200 });
checkCarFn({ color: 'blue', maxSpeed: 300, airBags: 8 });
