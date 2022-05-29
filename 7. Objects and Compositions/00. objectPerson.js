let person = {
    name: "Peter",
    age: 23,
    sayHi() {
        console.log(`${this.name} says hi!`);
    }
}

console.log(typeof(person.sayHi));