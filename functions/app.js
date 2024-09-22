"use strict";
//Functions
// 1* Function types
// 2* Option and default parameters
// 3* Rest parameters
// 4* overloads
//1,2
function login(name, cb, age, gender = "not to be disclosed") {
    console.log(name, cb, age, gender);
}
login("monzil", (value) => {
    console.log(value);
}, 20, "male");
//3 rest / spread
function operator(...arg) { }
operator(1, 2, 3, 4, 5);
function myFunc(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hello");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("wrong");
}
myFunc("hello");
myFunc("hello", 12);
