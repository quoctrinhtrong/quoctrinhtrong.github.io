abstract class Laptop {
    public keyboard():void {
        console.log('Laptop.keyboard!');
    }
    abstract mainboard(): void;
}

class LaptopDell extends Laptop {
    keyboard() {
        console.log('LaptopDell.keyboard!');
    }

    mainboard() {
        console.log('LaptopDell.mainboard!');
    }
}

let objLaptop:Laptop = new LaptopDell();
objLaptop.keyboard();
objLaptop.mainboard();