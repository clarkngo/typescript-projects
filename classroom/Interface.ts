// Use interface for parameter
interface Car {
  color: string;
  maxSpeed: number;
}

const checkCar = (car: Car) => console.log(`The max speed for this ${car.color} car is ${car.maxSpeed} m/h.`);
checkCar({ color: 'red', maxSpeed: 200 });
