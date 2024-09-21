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
  constructor(public _username: string, public roll: number) {}

  get username() {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
}

const u1 = new User("monzil", 21);
