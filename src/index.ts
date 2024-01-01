// variable declaration

// let a: number = 25;
// let salaray = <number>420000;

// let profession: string = "SDE";
// let fullName = <string>"Priyam Mondal";

// let married: boolean = false;
// let goodPerson = <boolean>true;

// let kuchbhi: any = "hellow world";

// we can assign multiple type to a variable (union type)

// let surname: string | number;
// surname = "Das";
// surname = 2;

// functions in ts

// const func = (n: number, m: number): number => {
//   console.log(n, m);
//   return n * m;
// };

// func(7, 5);

// type aliases

// type userName = string | number;

// const a: userName = "priyam mondal";

// type multiply = (n: number, m: number) => number;

// const func: multiply = (n, m) => {
//   return n * m;
// };

// const arr: (string | number | boolean)[] = [12, 34, 67, 43, false, "kuchbhi"];

// const arr2: Array<number | boolean | string> = [
//   45,
//   32,
//   54,
//   21,
//   "bsdfsdf",
//   true,
// ];

// fix item in an array (fixed size array)

// const arr3: [number, number, number] = [34, 56, 21];

// Objects in TypeScript

// type Obj = {
//   height: number;
//   weight: number;
//   gender: boolean;
// };

// const obj: Obj = {
//   height: 23,
//   gender: false,
//   weight: 45,
// };

// if we want a property to be optional then we need to use "?"
// type Obj1 = {
//   height: number;
//   weight: number;
//   gender?: boolean;
// };

// const obj1: Obj1 = {
//   height: 32,
//   weight: 53,
// };

// Interface in TypeScript

// Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.

// interface Obj2 {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }

// const obj2: Obj2 = {
//   height: 32,
//   weight: 53,
// };

// The difference between type and interface is unlike type, we can extend interface like class

// interface Obj3 {
//   height: number;
//   weight: number;
//   gender?: boolean;
//   func?: (n: number, m: number) => void;
// }

// type Func = (n: number, m: number) => string | number;

// interface newObj3 extends Obj3 {
//   fullName: string;
//   func: Func;
// }

// const gigi: newObj3 = {
//   fullName: "gigi",
//   height: 32,
//   weight: 53,
//   func: (n, m) => {
//     console.log(n * m);
//     return 43;
//   },
// };

// const gigi2: newObj3 = {
//   fullName: "gigi2",
//   height: 43,
//   weight: 64,
//   func: (n, m) => {
//     console.log(n * m);
//     return 43;
//   },
// };

// gigi2.func(5, 7);


// Functions in TypeScript 

