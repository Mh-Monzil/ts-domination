"use strict";
class Phone {
    constructor(brand = "hello", name, price) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
}
const p1 = new Phone("Apple", "iphone 12", 20);
const p2 = new Phone("Xiaomi", "note 12", 12);
//access modifier
class BottleMaker {
    constructor(name) {
        this.name = name;
    }
}
let b1 = new BottleMaker("Milton");
