class Laptop {
    keyboard() {
        console.log('Laptop.keyboard!');
    }
}
class LaptopDell extends Laptop {
    keyboard() {
        console.log('LaptopDell.keyboard!');
    }
    mainboard() {
        console.log('LaptopDell.mainboard!');
    }
}
let objLaptop = new LaptopDell();
objLaptop.keyboard();
objLaptop.mainboard();
