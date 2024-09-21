"use strict";
//Functions
// 1* Function types
// 2* Option and default parameters
// 3* Rest parameters
// 4* overloads
//1
function login(name, cb, age, gender = "not to be disclosed") {
    console.log(name, cb, age, gender);
}
login("monzil", (value) => {
    console.log(value);
}, 20, "male");
