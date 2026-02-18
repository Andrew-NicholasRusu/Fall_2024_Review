let now = new Date()
console.log(now)

console.log(now.getFullYear()); // Current year
console.log(now.getMonth()); // Month (0-11)
console.log(now.getDate()); // Day of the month (1-31)
console.log(now.getDay()); // Day of the week (0-6, where 0 is Sunday)

console.log(now.getHours()); // Current hour (0-23)
console.log(now.getMinutes()); // Current minute (0-59)
console.log(now.getSeconds()); // Current second (0-59)

let date1 = new Date("2025-02-01T14:30:00")
console.log(date1)

let date2 = new Date(170679840000)
console.log(date2)

//literal object
let person = { name: "Alice", age: 25 };
console.log(person.name); // Alice


function Person(name, age) {
    this.name = name;  
    this.age = age; 
    }
    
    let person1 = new Person("Emma", 30);
    let person2 = new Person("Agnesa", 17);
    let person3 = new Person("Niki", 17);
    
    console.log(person1.name); 
    console.log(person2.name); 
    console.log(person3.name); 

let score = 100
let age = 18

console.log(score > 75)

console.log(age < 18)

console.log(score > 75 && age < 18)