"use strict";
// class User {
//   constructor(public name: string, public roll: number) {}
//   getName() {
//     return this.name;
//   }
//   setName(value: string) {
//     this.name = value;
//   }
// }
// const u1 = new User("monzil", 21);
class User {
    constructor(_username, roll) {
        this._username = _username;
        this.roll = roll;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
}
const u1 = new User("monzil", 21);
