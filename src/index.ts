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

// ================================================================
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

// ================================================================
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

// ================================================================
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

// ================================================================
// Functions in TypeScript
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (a, b, l) => {
//   if (typeof l === "undefined") return a * b;
//   return a * b * l;
// };

// default parameter in function

// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (a, b, l = 30) => {
//   return a * b * l;
// };

// func(23, 56);

// if we define the type in the same line then we don't have to do the third parameter optional.

// const func = (a: number, b: number, l: number = 30): number => {
//   return a * b * l;
// };

// func(23, 56);

// rest operator

// type funcType = (...m: number[]) => number[];
// const func: funcType = (...m) => {
//   return m;
// };

// func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// normal function
// function func(n: number): number {
//   return 45;
// }

// ================================================================
// function with object

// interface ProductTye {
//   readonly id: string;
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// }
// type GetDataType = (product: ProductTye) => void;
// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const product1: ProductTye = {
//   id: "123EFG",
//   name: "Macbook",
//   stock: 45,
//   price: 999999,
//   photo: "http://sampleimage.com/images/macbook.png",
// };

// getData(product1);

// In the case of normal function if we dont't mention the return type typescript read it as the type of what we return. suppose we return a number so typescript will read it as number, in the case of error it will read it as "Error"
// But instead of returning if we throw an error then typeScript will read it as "never" type.

// const errorHandler = () => {
//   throw new Error();
// };

// We can assign our very own type

// type themeMode = "light" | "dark";

// let mode: themeMode;

// ================================================================
// Classes in TypeScript 

