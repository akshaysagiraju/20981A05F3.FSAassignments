let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: number[] = [1, 2, 3];
let e: [number, string];
e = [1, "a"];
enum Weeks { Monday, Tuesday, Wednesday, Thrusday, Friday, saturday };
console.log(a, b, c, d, e, Weeks.Monday);


let add = (x: number, y: number) => {
    return (x + y);
}
console.log(add(1, 9))


function Capitalize(m: string) {
    return (m.toUpperCase());
}
console.log(Capitalize("hello"));


interface Person {
    name: string,
    age: number,
    email: string
}
let user: Person = {
    name: "akshay",
    age: 10,
    email: "sagirajuakshayvarma@gmail.com"
}
console.log(user);


class Car {
    make: string;
    model: string;
    year: number;
    displayInfo() {
        console.log("make: " + this.make + "  model: " + this.model + "  year: " + this.year);
    }
}
let car = new Car();
car.make = "USA";
car.model = "BS6";
car.year = 2020;
car.displayInfo();


function reverseArray<T>(a: T) {
    return (a);
}
let output = reverseArray<number[]>([1, 2, 3].reverse());
console.log(output);