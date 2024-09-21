//Functions

// 1* Function types
// 2* Option and default parameters
// 3* Rest parameters
// 4* overloads

//1
function login(name: string, cb: (value: string) => void, age?: number, gender: string = "not to be disclosed"): void {
    console.log(name, cb, age, gender);
}

login(
  "monzil",
  (value: string) => {
    console.log(value);
  },
  20,
  "male"
);
