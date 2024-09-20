//Basic Types
// 1* Primitive Types (number, string, boolean)
// 2* Array
// 3* Tuples
// 4* Enums
// 5* Any, Unknown, Void, Null, Undefined, Never

// 1
let a = 12;

//2
let arr = [1, 2, 3, "hi"];

//3
let arr2: [number, string] = [12, "hello"];

//4
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

//5
// any 
let anyType; //must be avoided 
let aType: number;

//unknown 
let u: unknown;
u = 12;
u = "umbrella";

if(typeof u === "string"){ // have to check type before using
    u.toUpperCase();
}

//void
function abcd(): void{
    console.log("a func isn't return anything then type will be void");
}