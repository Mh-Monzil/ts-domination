// Interfaces and Type Aliases

// 1* Defining interfaces
// 2* Using interfaces to define object shapes
// 3* Extending interfaces
// 4* Type Aliases
// 5* Union & Intersection types

//1,2
interface User {
  name: string;
  email: string;
  password: string;
  age?: string; //optional -> ?
}

function interfaceFunc(obj: User) {
  console.log(obj.name);
}

interfaceFunc({
  name: "monzil",
  email: "monzil@gmail.com",
  password: "12345",
});

//3
interface Admin extends User {
  //admin will have all the properties of the user
  admin: boolean;
}

//4
type valueType = string | number | null;
let c: valueType;

function valueFunc(obj: valueType) {}

valueFunc("12");

//5
type User2 = {
    name: string,
    email: string;
}

type Admin2 = User2 & {
    getDetails(user: string): void
}

function checkIntersection(a: Admin2){
    // name, email, getDetails
}