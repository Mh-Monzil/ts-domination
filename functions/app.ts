//Functions

// 1* Function types
// 2* Option and default parameters
// 3* Rest parameters
// 4* overloads

//1,2
function login(
  name: string,
  cb: (value: string) => void,
  age?: number,
  gender: string = "not to be disclosed"
): void {
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

//3 rest / spread

function operator(...arg: number[]): void {}

operator(1, 2, 3, 4, 5);

//4
function myFunc(a: string): void;
function myFunc(a: string, b: number): number;

function myFunc(a: any, b?: any) {
  if (typeof a === "string" && b === undefined) {
    console.log("hello");
  }
  if (typeof a === "string" && typeof b === "number") {
    return 123;
  } 
  else throw new Error("wrong")
}

myFunc("hello")
myFunc("hello", 12)