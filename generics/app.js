"use strict";
// Generics
// 1* generic functions
// 2* generic interfaces
// 3* generic classes
//1
function logger(a) {
    console.log(a);
}
logger("monzil");
logger(12);
logger(true);
logger(24);
function ringFunc(obj) { }
ringFunc({ name: "monster", price: 12, key: "key" });
class RingMaker {
    constructor(key) {
        this.key = key;
    }
}
let br1 = new RingMaker("key");
// let br1 = new RingMaker<string>("key")
