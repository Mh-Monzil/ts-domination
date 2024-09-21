class Phone {
    constructor(public brand: string = "hello", public name: string, public price: number){
        this.brand = brand;
    }
}

const p1 = new Phone("Apple", "iphone 12", 20);
const p2 = new Phone("Xiaomi", "note 12", 12);

//access modifier
class BottleMaker {
    constructor(public name: string) {

    }
}

let b1 = new BottleMaker("Milton")