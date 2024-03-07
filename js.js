//  variable

// let myName = "Artin-Paravar";
// myName.slice(0, 2);
// myName.split("a"); matn ke benevisi joda mikone az variable
// myName.indexOf(2);
// myName.toUpperCase();
// myName.toLowerCase();
// myName.length();
// myName.repeat(500);
// myName.replace("A", "O");
// console.log(myName);

/////////////////////////////////

// for object

// let array = ["Artin", "Armin", "Aha", "Aha2"];
// array.join(",");
// array.indexOf("Artin");
// array.push("akhari");//akhari azafe mikone
// array.pop(); //akhari pak mikone
// array.shift(); //avali pak mikone
// array.unshift("avali"); //avali azafe mikone
// console.log(array);

//filter
// const result = array.filter((word) => {
//   return word.length <= 4;
// });
// console.log(result);

//

//reduce//

// 1

// const array = [15, 16, 17, 18, 19];
// array.reduce((adad1, adad2, index) => {
//   const jamea2adad = adad1 + adad2;
//   console.log(
//     `adad1: ${adad1}, adad2: ${adad2}, index: ${index}, jamea2adad: ${jamea2adad}`
//   );
//   return jamea2adad;
// });

//2

// const items = [
//   { name: "Apple", category: "Fruit" },
//   { name: "Onion", category: "Vegetable" },
//   { name: "Orange", category: "Fruit" },
//   { name: "Lettuce", category: "Vegetable" },
// ];

// const groupedItems = items.reduce((accumulator, item) => {
//   if (!accumulator[item.category]) {
//     accumulator[item.category] = [];
//   }
//   accumulator[item.category].push(item.name);
//   return accumulator;
// }, {});

// console.log(groupedItems);
// { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }

/////////////////////////////////

// for
// let array = ["Artin", "Armin", "Aha", "Aha2"];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

/////////////////////////////////

//switch
// let a = 1;
// switch (a) {
//   case 1:
//     console.log("aha1");
//     break;
//   case 2:
//     console.log("aha2");
//     break;
//   case 3:
//     console.log("aha3");
//     break;
//   default:
//     console.log("chizi ni");
//     break;
// }

/////////////////////////////////

// if tip / nazdik tarin mothgayer emal mishe

// let a = 660;
// if (a === 660) {
//   let a = 66;
//   console.log(a);
// }

/////////////////////////////////

// default function

// const aha = (name = "default", famili = "default") => {
//   console.log(`hello ${name} ${famili}`);
// };
// aha();
// aha("artin", "paravar");

/////////////////////////////////

// return from function

// const aha = (adad) => {
//   return adad * 50;
// };
// const result = aha(10);
// console.log(result);

/////////////////////////////////

// callback function

// const func = (callback) => {
//   callback("artin");
// };
// func((natige) => {
//   console.log(natige + " paravar");
// });

// function callback1(result) {
//   console.log(result);
// }
// const callback2 = (a) => {
//   callback1(`Artin ${a}`);
// };

// callback2("paravar");
/////////////////////////////////

// forEach
// let array = ["Artin", "Armin", "Aha", "Aha2"];
// array.forEach((element) => {
//   let div = document.querySelector("div");

//   div.innerHTML += `<p>${element}</p>`;
// });

////////////////

// Object

// let object = {
//   name: "unknown",
//   age: 10,
//   email: "unknown@gmail.com",
//   login: function () {
//     console.log("function");
//   },
//   login2: function () {
//     console.log(this);
//     // console.log(this.name);
//     //you can use foreach
//     //regular function
//   },
// };
// console.log(object);
// object.login2();

// let object2 = [
//   {
//     name: "artin",
//   },
//   {
//     name: "artin1",
//   },
//   {
//     name: "artin2",
//   },
//   {
//     name: "artin3",
//   },
// ];

//

// console.log(object2);
// object2.map((a) => {
//   console.log(a);
// });

//

// for (let i = 0; i < 1; i++) {
//   const element = Math.floor(Math.random() * object2.length);
//   document.body.innerHTML = `<h1>${object2[element].name}</h1>`;
// }

////////////////

// p.innerHTML;   baray text khode element
// p;  baray text dakhel element

////////////////

// let a = document.querySelector("a");

// a.getAttribute("href");
// console.log(a.getAttribute("href"));
// a.setAttribute("href", "artin.com");

//

// let p = document.querySelector("p");

// p.getAttribute("class");
// p.setAttribute("style", "color: green;");
// console.log(p.getAttribute("class"));
// p.setAttribute("class", "anyting");

////////////////

// media query in javascript

// let x13 = window.matchMedia(" (min-width: 600px)");

// x13.addEventListener("change", () => {
//   if (x13.matches) {
//     document.body.style.backgroundColor = "red";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// });

/////////////// api in javascript

// const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// let divasli = document.querySelector("div");

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((userData) => {
//     userData.map((item) => {
//       let div = document.createElement("div");
//       div.className = "div1";
//       let title = document.createElement("h3");
//       title.innerText = item.title;
//       let body = document.createElement("p");
//       body.innerText = item.body;
//       body.className = "aha";
//       divasli.appendChild(div);
//       div.appendChild(title);
//       div.appendChild(body);
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// Object and filter(api)

// let object2 = [
//   {
//     id: 1,
//     name: "artin",
//   },
//   {
//     id: 2,
//     name: "armin",
//   },
//   {
//     id: 3,
//     name: "abasali",
//   },
//   {
//     id: 4,
//     name: "dadashamgogla",
//   },
//   {
//     id: 5,
//     name: "sirabi",
//   },
// ];

// object2.push({ id: 6, name: "artin5" });

// function filter() {
//   const filter = object2.filter((a) => {
//     return a.name.length <= 3 || a.id >= 4;
//   });
//   display(filter);
// }
// function display(item) {
//   item.map((api) => {
//     let h1 = document.createElement("h1");
//     h1.innerText = api.name;
//     document.body.append(h1);
//   });
// }

// //////or

// function filter() {
//   const filter = object2.filter((a) => {
//     return a.name.length <= 3 || a.id >= 4;
//   });
//   filter.map((api) => {
//     let h1 = document.createElement("h1");
//     h1.innerText = api.name;
//     document.body.append(h1);
//   });
// }
// filter();

/// before react

// let object = {
//   name: "artin",
//   age: 15,
//   Momage: 45,
// };

// let { name, age } = object;
// console.log(age);
// console.log(name);

// let aha = { ...object };
// console.log(aha); /// object item

//// async function

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//// this , event , parent

// let divasli = document.querySelector("div").parentElement;
// let divasli = document.querySelector("div").parentNode;
// let divasli = document.querySelector("div").childNodes;
// let divasli = document.querySelector("div").nodeName;
// let divasli = document.querySelector("div").checkVisibility();

///

// let divasli = document.querySelector("div");
// divasli.addEventListener("click", (event) => {
//   //   console.log(event.target);
//   //   console.log(event.target.className);
//   //   console.log(event.target.id);
//   //   console.log(event.target.innerText);
//   //   console.log(event.target.innerHTML);
//   //   console.log(event.currentTarget);
// });

////// call back 2

// function first() {

//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// 2
// 1

////

// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }

// doHomework("math", function alertFinished() {
//   alert("Finished my homework");
// });

////// object Destructuring

// const person = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345",
//   },
// };

// const {
//   name,
//   age,

//   address: { city, street, state },
// } = person;

// console.log(name);
// console.log(age);
// console.log(state);
// console.log(street);

////// Promises

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//////// to ways of get object item

// let object2 = [
//     {
//       name: "artin",
//     },
//     {
//       name: "artin1",
//     },
//     {
//       name: "artin2",
//     },
//     {
//       name: "artin3",
//     },
//   ];

// for (const aha of object2) {
//   console.log(aha);
// }

// for (let i = 0; i < object2.length; i++) {
//   const element = object2[i];
//   console.log(element);
// }

////////////regex
// let btn = document.querySelector("button");
// let divha = document.querySelector("div");
// let input = document.querySelector("input");

// input.addEventListener("keyup", () => {
//   let data = input.value;
//   let regex = new RegExp(data, "ig");
//   divha.innerHTML = divha.innerText.replace(regex, `<span>${data}</span>`);
// });
////////////regex
