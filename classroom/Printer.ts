abstract class Printer {
  // This function can be shared by all children classes
  powerOn() { console.log('Power on.') }
  // We defined a abstract function print to let
  // its children classes to implement the detail
  abstract print(): void
}

class LaserPrinter extends Printer {
  print() { console.log(`I will use laser to print.`) }
}

class InkjetPrinter extends Printer {
  print() { console.log(`I will use ink to print.`) }
}

const printerA = new LaserPrinter();
const printerB = new InkjetPrinter();

printerA.powerOn();
printerB.print();
printerA.powerOn();
printerB.print();
