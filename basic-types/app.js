"use strict";
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
let arr2 = [12, "hello"];
//4
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
//5
// any 
let anyType; //must be avoided 
let aType;
//unknown 
let u;
u = 12;
u = "umbrella";
if (typeof u === "string") { // have to check type before using
    u.toUpperCase();
}
//void
function abcd() {
    console.log("a func isn't return anything then type will be void");
}
