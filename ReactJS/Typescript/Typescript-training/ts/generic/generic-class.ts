// Generic giúp có thể tùy chỉnh type của các variable trong class
class Product<A,B,C> {
    id: A;
    name: B;
    price: C;
    constructor(id: A, name: B, price:C) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showInfo = () =>{
        console.log(`id: ${this.id}, name: ${this.name}, price: ${this.price}`);
    }
}

let objProduct = new Product<number, string, number>(1, 'oSK', 2000);
objProduct.showInfo();

let objProduct02 = new Product<string, string, number>("11", 'oSK', 2000);
objProduct02.showInfo();
