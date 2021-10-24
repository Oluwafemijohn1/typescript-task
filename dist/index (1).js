// const firstName = "Musa Abel";
// console.log(firstName);
// const age = 10;
// console.log(age);
// let stringNumber = "23";
// stringNumber = "sshdsdhs";
// console.log(stringNumber);
// let population: number;
// population = 340;
// console.log(population);
// function printConsole() {
//   console.log("printConsole", this);
//   console.log("Hello dear!!!");
// }
// const printName = (name: string) => {
//   console.log("printName", this);
//   console.log(name);
// };
// function thisExample() {
//   console.log("thisExample", this);
//   const innerFunction = () => {
//     console.log("innerFunction", this);
//   };
//   innerFunction();
// }
// printConsole();
// printName("Solomon");
// thisExample();
// interface IPrintInterface {
//   customerName?: string;
//   date?: string;
//   amount?: number;
//   receiptNo?: string;
// }
// function printReceipt(data: IPrintInterface) {
//   console.log(data);
// }
// const receiptData = {
//   customerName: "Samuel Sampson",
//   date: "25/02/2000",
//   amount: 30000,
//   receiptNo: "223345",
// };
// printReceipt(receiptData);
// /**TODOs
//  * interface inheritance
//  * interface union
//  * interface intersection
//  * class
//  * methods
//  * Class Inheritance
//  *
//  * Assignment
//  * build an application that has the ability to collect user' information and neatly present those information back to the user on request.
//  * Must to have:
//  * -inheritance
//  * -interfaces(union and intersection)
//  * -typings
//  * -methods
//  * -method overloading and overriding
//  *
//  */
// interface IPerson extends IPrintInterface, IShop {
//   userName: string;
//   age: number;
//   handleClick?(): number;
//   handleSubmit?(): number;
//   handleClear?(value: boolean): number;
// }
// const obj = { name: "dsdksjkds", gender: "Male" };
// console.log("A", obj);
// const obj2 = { name: 89899932, gender: "Male" };
// console.log("B", obj2);
// const obj3 = { ...obj, ...obj2 };
// console.log("C", obj3);
// interface IShop {
//   name: string;
//   location?: string;
// }
// interface IState {
//   name: string;
//   stateName: string;
//   population: number;
// }
// function printUserDetails(data: IPerson) {
//   console.log(data);
// }
// printUserDetails({ userName: "solomon123", age: 98, name: "thththhhhthth" });
// function printData(data: string | number | boolean | undefined | IShop) {
//   console.log(data);
// }
// function printData2(data: IShop & IState) {
//   console.log(data);
// }
// function printData3(data: (IShop & IState) | string) {
//   console.log(data);
// }
// printData({ name: "sdjsdjsjdjs" });
// printData2({
//   name: "dsdsjbsbdsjbd",
//   population: 389,
//   stateName: "asas",
//   location: "wqqwqwq",
// });
// printData3("dsdsdjsjdjskjdks");
// class Person {
//   private userName: string;
//   private age: number;
//   private location: string;
//   static VERSION_CODE = 88;
//   constructor(name: string, age: number, location: string) {
//     console.log("Person", this);
//     this.userName = name;
//     this.age = age;
//     this.location = location;
//     console.log("this is the constructor");
//   }
//   printName(name: string, age: number) {
//     console.log(`hey ${name}, how are you doing???????`);
//     this.printAge(age);
//     this.age = age;
//     this.userName = name;
//   }
//   private printAge(age: number) {
//     console.log(`Your age is ${age}`);
//   }
//   static printAnything() {
//     console.log("ddsdkskdjkskdksjds");
//   }
//   toString() {
//     console.log({
//       name: this.userName,
//       age: this.age,
//       location: this.location,
//     });
//   }
// }
// const PersonObj = new Person("Andrew", 98, "lagos");
// PersonObj.toString();
// PersonObj.printName("Paul", 89);
// PersonObj.toString();
// PersonObj.toString();
// Person.printAnything();
// console.log(Person.VERSION_CODE);
// interface IAnimal {
//   name: string;
//   specie: string;
//   domain: string;
//   noOfLegs: number;
// }
// class Animal {
//   private properties: IAnimal;
//   constructor(data: IAnimal) {
//     this.properties = data;
//   }
//   toString() {
//     console.log("");
//     return this.properties;
//   }
// }
// class Dog extends Animal {
//   protected barking() {
//     console.log("DogTHIS", this);
//     console.log("woof woof");
//   }
// }
// class Bird extends Dog {
//   fly() {
//     console.log("I am flying away...");
//   }
//   barkingBird() {
//     console.log("BirdTHIS", this);
//     super.barking();
//   }
// }
// const MonsterDog = new Dog({
//   domain: "Land",
//   name: "monsterDog",
//   noOfLegs: 4,
//   specie: "Pitbull",
// });
// console.log(MonsterDog.toString());
// console.log(MonsterDog);
// const MyBird = new Bird({
//   domain: "Sky",
//   name: "Parrot",
//   noOfLegs: 2,
//   specie: "Talking-bird",
// });
// console.log(MyBird.toString());
// MyBird.fly();
// MyBird.barkingBird();
// interface IBird {
//   name: string;
//   fly(): void;
// }
// let bird: IBird;
// let pig: { name: string; run(): void };
// pig = {
//   name: "My Pig",
//   run: () => {
//     console.log("Am running...");
//   },
// };
// console.log(pig);
// pig.run();
