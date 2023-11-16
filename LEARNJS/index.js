/*  
* ****EXAMPLE 0****
 let age = 20;
 console.log(age);
 let name = "0ks1N";
 let worker = false;

 document.getElementById("p1").innerHTML = "Hello " + name;
 (document.getElementById("p2").innerHTML = "U are "), age, "Years Old";
 document.getElementById("p3").innerHTML = "Enrolled " + worker;
 */

/*    
! ****EXAMPLE 1****  
 let username;
 document.getElementById("myButton").onclick = function () {
 username = document.getElementById("myText").value;
 console.log(username);
}; 
*/

/*    
? ****EXAMPLE 2****
 let age = window.prompt("How old are u?");
 console.log(typeof age);
 age = Number(age);
 console.log(typeof age);
 age += 1;
 console.log("U are ", age, "old!");
*/

/*    
 TODO ****EXAMPLE 3****
 const pi = 3.14;
 let radius;
 let circumference;

 radius = window.prompt("Enter the radius of a circle");
 radius = Number(radius);

 circumference = 2 * pi * radius;
 console.log("Your circle circumference is: " + circumference);
*/

/*    
* ****EXAMPLE 4****
 let a;
 let b;
 let c;

 a = window.prompt("Enter the a corner.");
 a = Number(a);
 b = window.prompt("Enter the b corner.");
 b = Number(b);

 c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

 console.log("Your triangle hipotenus is: " + c);
*/

/*    
! ****EXAMPLE 5****

 document.getElementById("submitButton").onclick = function () {
   a = document.getElementById("aTextBox").value;
   a = Number(a);

   b = document.getElementById("bTextBox").value;
   b = Number(b);

   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
   document.getElementById("cLabel").innerHTML = "Side C: " + c;
 };
*/

/*    
 ? ****EXAMPLE 6****
 let count = 0;

 document.getElementById("decreaseBtn").onclick = function () {
   count -= 1;
   document.getElementById("countLabel").innerHTML = count;
 };
 document.getElementById("resetBtn").onclick = function () {
   count = 0;
   document.getElementById("countLabel").innerHTML = count;
 };
 document.getElementById("increaseBtn").onclick = function () {
   count += 1;
   document.getElementById("countLabel").innerHTML = count;
 };
*/

/*    
 TODO ****EXAMPLE 7****
 let x;
 let y;
 let z;

 document.getElementById("rollBtn").onclick = function () {
 x = Math.floor(Math.random() * 6) + 1;
 y = Math.floor(Math.random() * 6) + 1;
 z = Math.floor(Math.random() * 6) + 1;

 document.getElementById("xLabel").innerHTML = x;
 document.getElementById("yLabel").innerHTML = y;
 document.getElementById("zLabel").innerHTML = z;
 };
*/

/*    
* ****EXAMPLE 8****
 let fullName = "Ammar GÜRSEL";
 let firstName;
 let lastName;

 firstName = fullName.slice(0, fullName.indexOf(" "));
 lastName = fullName.slice(fullName.indexOf(" ") + 1);

 console.log(firstName);
 console.log(lastName);
*/

/*    
! ****EXAMPLE 9****
 document.getElementById("myBtn").onclick = function () {
 if (document.getElementById("myCheckBox").checked) {
   alert("YOU ARE SUBSCRIBED !");
 } 
 else {
   alert("YOU ARE NOT SUBSCRIBED!");
 }
};
*/

/*    
 ? ****EXAMPLE 10****
 document.getElementById("myBtn").onclick = function () {
  const visaBtn = document.getElementById("visaBtn");
  const mastercBtn = document.getElementById("mastercBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (visaBtn.checked) {
     alert("You card is Visa Card!");
  } else if (mastercBtn.checked) {
     alert("You card is MasterCard!");
  } else if (paypalBtn.checked) {
     alert("You card is PayPal Card!");
  } else {
     alert("You must select a payment!");A
  }
 };
*/

/*    
 TODO ****EXAMPLE 11****
 let userName = "";

 while (userName == "" || userName == null) {
   userName = window.prompt("Enter your name");
 }

 alert("Hello " + userName + " !");
*/

/*    
* ****EXAMPLE 12****
 let area;
 let width;
 let height;

 width = window.prompt("Enter width");
 height = window.prompt("Enter height");

 area = getArea(width, height);

 console.log("The area is:", area);

 function getArea(width, height) {
   return width * height;
 }
*/

/*    
! ****EXAMPLE 13****
 const answer = Math.floor(Math.random() * 10 + 1);
 let guesses = 0;

 document.getElementById("submitButton").onclick = function () {
   let guess = document.getElementById("guessField").value;
   guesses += 1;

   if (guess == answer) {
     alert(`${answer} is the #. It took you ${guesses} guesses`);
   } else if (guess < answer) {
     alert("Too small!");
   } else {
     alert("Too large!");
   }
 };
*/

/*    
 ? ****EXAMPLE 14****
 document.getElementById("submitButton").onclick = function () {
   let temp;

   if (document.getElementById("cButton").checked) {
     temp = document.getElementById("textBox").value;
     temp = Number(temp);
     temp = toCelcius(temp);
     document.getElementById("tempLabel").innerHTML = temp + "°C";
   } else if (document.getElementById("fButton").checked) {
     temp = document.getElementById("textBox").value;
     temp = Number(temp);
     temp = toFahrenheit(temp);
     document.getElementById("tempLabel").innerHTML = temp + "°F";
   } else {
     document.getElementById("tempLabel").innerHTML = "Select a unit!";
   }
 };

 function toCelcius(temp) {
   return (temp - 32) * (5 / 9);
 }
 function toFahrenheit(temp) {
   return (temp * 9) / 5 + 32;
 }
*/

/*    
 TODO ****EXAMPLE 15****
   let fruits = ["apple", "orange", "banana"];
   console.log(fruits);
   console.log(fruits[0]);
   console.log(fruits[1]);
   console.log(fruits[2]);

   fruits.push("lemon"); //  Add an element
   fruits.pop(); //   Removes last element
   fruits.unshift("tomato"); //  Add element to beginning
   fruits.shift(); //  Removes element from beginning
   console.log(fruits);
   console.log(fruits.length);
   console.log(fruits.indexOf("apple"));
   console.log(fruits.indexOf("kiwi"));
*/

/* 
 * ****EXAMPLE 16****
 let prices = [5, 10, 15, 20, 25];

  for (let i = prices.length - 1; i >= 0; i -= 1) {
   console.log(prices[i]);
 }
  for (let i of prices) {
  console.log(i);
 }
  for (let prices of prices) {
  console.log(i);
 }
*/

/*
! ****EXAMPLE 17****
let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort(); // Alphabetical order
fruits = fruits.sort().reverse(); // Reverse alphabetical order

for (let fruit of fruits) {
  console.log(fruit);
}
*/

/*
? ****EXAMPLE 18****
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "orions", "patatos"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][0] = "steak";

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
}
*/

/*
TODO ****EXAMPLE 19**** 
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);
console.log(class1);
*/

/*
 * ****EXAMPLE 20**** 
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
*/

/*
! ****EXAMPLE 21****  
sum(2, 3, displayDOM);

function sum(x, y, doSomething) {
  let result = x + y;
  doSomething(result);
}
function displayConsole(output) {
  console.log(output);
}
function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}
*/

/*
? ****EXAMPLE 22****  
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element) {
  console.log(element);
}
*/

/*
TODO ****EXAMPLE 23****  
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

cubes.forEach(print);
//squares.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}
function print(element) {
  console.log(element);
}
*/

/*
* ****EXAMPLE 24****  
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(chechAge);

adults.forEach(print);

function chechAge(element) {
  return element >= 18;
}
function print(element) {
  console.log(element);
}
*/

/*
! ****EXAMPLE 25****  
let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`The total is : $${total}`);

function checkOut(total, element) {
  return total + element;
}
*/

/*
? ****EXAMPLE 26****  
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);
grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x, y) {
  return y - x;
}

function ascendingSort(x, y) {
  return x - y;
}
function print(element) {
  console.log(element);
}
*/

/*
TODO ****EXAMPLE 27****  
let count = 0;

document.getElementById("increaseButton").onclick = function () {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
};
document.getElementById("decreaseButton").onclick = function () {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
};
*/

/*
* ****EXAMPLE 28****  
let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
*/

/*
! ****EXAMPLE 29****  
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];

shuffle(cards);
console.log(cards);

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
*/

/*
? ****EXAMPLE 30****  
let userName = "Bro";
let userInbox = 0;

login();

function login() {
  displayUserName();
  displayUserInbox();

  function displayUserName() {
    console.log(`Welcome ${userName}`);
  }
  function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
  }
}
*/

/*
TODO ****EXAMPLE 31****  
const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);

 store.get("t-shirt");
 store.set("hat",40);
 store.delete("hat");
 console.log(store.has("underwear"));
console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));
*/

/*
* ****EXAMPLE 32****
const car1 = {
  model: "Mustang",
  color: "Blue",
  year: 2023,

  drive: function () {
    console.log(`You drive the ${this.model}`);
  },
};
const car2 = {
  model: "Corvette",
  color: "Red",
  year: 2021,

  drive: function () {
    console.log(`You drive the ${this.model}`);
  },
};
car1.drive();
car2.drive();
*/

/*
! ****EXAMPLE 33****
class Player {
  score = 0;

  pause() {
    console.log("You paused the game.");
  }
  exit() {
    console.log("You exited the game.");
  }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();
*/

/*
? ****EXAMPLE 34****
class Student {
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(`${this.name} is studying!`);
  }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();
console.log(" ");

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();
console.log(" ");

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();
*/

/*
TODO ****EXAMPLE 35****
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}
class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

const rabbit = new Rabbit();
const hawk = new Hawk();
const fish = new Fish();

console.log(rabbit.alive);
hawk.eat();
fish.swim();
rabbit.sleep();
*/

/*
* ****EXAMPLE 36****
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
const rabbit = new Rabbit("rabbit", 1, 40);
const hawk = new Hawk("hawk", 3, 200);
const fish = new Fish("fish", 2, 80);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(" ");

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
console.log(" ");

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(" ");
*/

/*
! ****EXAMPLE 37****
class Car {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }
  get power() {
    return `${this._power}hp`;
  }
  get gas() {
    return `${this._gas}L ${(this._gas / 50) * 100}%`;
  }
  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);

car.gas = -100;

console.log(car.power);
console.log(car.gas);
*/

/*
? ****EXAMPLE 38****
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2023, "yellow");

changeColor(car3, "gold");
displayInfo(car3);

function displayInfo(car) {
  console.log(car3.model);
  console.log(car3.year);
  console.log(car3.color);
}

function changeColor(car, color) {
  car.color = color;
}
*/

/*
TODO ****EXAMPLE 39****
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`You drive the ${this.model}`);
  }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2022, "blue");
const car3 = new Car("Lambo", 2020, "yellow");

const cars = [car1, car2, car3];


console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

cars[0].drive();
cars[1].drive();
cars[2].drive();

startRace(cars);

function startRace(cars) {
  for (const car of cars) {
    car.drive();
  }
}
*/

/*
* ****EXAMPLE 40****
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}
let cards = [
  new Card("A", "Hearts"),
  new Card("A", "Spades"),
  new Card("A", "Diamonds"),
  new Card("A", "Clubs"),
  new Card("2", "Hearts"),
  new Card("2", "Diamonds"),
  new Card("2", "Clubs"),
];

console.log(cards[0].value + " " + cards[0].suit);

cards.forEach((cards) => console.log(`${cards.value} ${cards.suit}`));
*/

/*
! ****EXAMPLE 41****
try {
  let x = window.prompt("Enter a #");
  x = Number(x);

  if (isNaN(x)) throw "That wasn't a number!";
  if (x == "") throw "That was empty!";

  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
} finally {
  console.log("This always executes");
}
*/

/*
? ****EXAMPLE 42****
let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}
*/

/*
TODO ****EXAMPLE 43****
let date = new Date();

let date = new Date(0);
let date = new Date(2023, 0, 1, 2, 3, 4, 5);
let date = new Date("January 1, 2023 00:00:00");


let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();


date.setFullYear(2023);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setMilliseconds(0);


date = date.toLocaleString();

console.log(formatTime(date));

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${month}/${day}/${year}`;
}
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
}
*/

/*
* ****EXAMPLE 44****
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds}`;
  }
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
*/
