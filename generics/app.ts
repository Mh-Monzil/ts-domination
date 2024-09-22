// Generics

// 1* generic functions
// 2* generic interfaces
// 3* generic classes

//1
function logger<T>(a: T) {
  console.log(a);
}

logger<string>("monzil");
logger<number>(12);
logger(true);
logger(24);


//2
interface Ring<T> {
  name: string;
  price: number;
  key: T;
}

function ringFunc(obj: Ring<string>) {}

ringFunc({ name: "monster", price: 12, key: "key" });


class RingMaker<T>{
    constructor(public key: T){}
}

let br1 = new RingMaker("key")
// let br1 = new RingMaker<string>("key")