class Product {
    constructor(id, name, price) {
        this.showInfo = () => {
            console.log(`id: ${this.id}, name: ${this.name}, price: ${this.price}`);
        };
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
let objProduct = new Product(1, 'oSK', 2000);
objProduct.showInfo();
let objProduct02 = new Product("11", 'oSK', 2000);
objProduct02.showInfo();
