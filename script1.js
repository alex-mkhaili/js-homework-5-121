// // burger bar
// let navbar = document.getElementById("navigation");
// let burgerBar = document.getElementById("burgerBar");
// let toogleBar = document.getElementById("toggle-menu");

// // burgerBar.addEventListener('click', function() {
// //     navbar.classList.toggle('active');
// // })

// toogleBar.addEventListener("click", function () {
//   toogleBar.classList.toggle("toggleActive");
//   navbar.classList.toggle("overlay");
// });

//array methods
// let names = ['beka', 'sandro', 'giorgi', 'ani', 'nino'];
// names.push('nino');
// names.unshift('ana');
// names.shift(); //pirvel elemnts washlis
// names.pop();//bolo elemnts washlis

// let newArray = names.slice(1,3); //abrunebs axal masivs(start,end)

//map
// let numbers = [10, 25, 2, 4, 5];
// let newArray = numbers.map((item) => Math.pow(item,3));

//filter
// let newArray = numbers.filter( (element) => element > 10);
// let languages = ['jaavscript','python', 'java'];
// console.log(languages.length);

// let newLangues = languages.filter( (item) => item.length > 5 && item.includes('av'));

//reverse
// let array = ['apple', 'banana','mango'];
// array.reverse();

// console.log(array.indexOf('banana'));

//some & every ( true, false)
// let array = [100, 225, 4, 8].some( (item) => item < 125);

//sort
// let array = [100, 225, 4, 8];

// let maxValue = array.sort( (x,y)  => x - y)[array.length - 1];

//concat
// let array1 = ['nino', 'ana'];
// let array2 = ['beka', 'sandro'];

// let allArray = array1.concat(array2);

//reduce
// let array = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce( (accumulator, currentValue) => accumulator.concat(currentValue));

// let array = [
//   [15, -3, 10],
//   [25, -2, 5],
//   [-100, -5, 6],
// ].reduce((accumulator, currentValue) => accumulator.concat(currentValue));

// let newArray = array.filter(item => item > 0 && item == 5);

// console.log(newArray);

// for (let item of array) {
//   // console.log(item);
//   for (let positive of item) {
//     if (positive > 0){
//       console.log(positive);
//     }
//   }
// }

//splice
// let array = ['html', 'css', 'javascript', 'python', 'c#'];

// array.splice(3,1);
// console.log(array);

//foreach
let array = ["html", "css", "javscript", "python"];

// for (let x of array) {
//   if (x > 5) {
//     console.log(x);
//   }
// }

array.forEach((item) => {
  if (item.length > 5 && item.includes("av")) {
    console.log(item);
  }
});

//es6
let user = {
  name: "sadnro",
  age: 25,
};

// let printName = user.name + " " + 'არის' + " "  + user.age  + " " + 'წლის';
let printName2 = `${user.name} არის ${user.age} წლის`;

let number = 150;
// if (number < 10) {
//   console.log('hello');
// } else if (number < 30) {
//   console.log('hello2')
// }else{
//   console.log('error');
// }

let result =
  number < 10
    ? "hello"
    : number < 30
    ? "hello2"
    : number > 10
    ? "hello3"
    : "error";

console.log(result);
