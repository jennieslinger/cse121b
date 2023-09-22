/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jenni Eslinger";
let currentYear = new Date();
const profilePicture = "images\\profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let img = document.getElementsByTagName("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
let imageElement = img[0].setAttribute("src", profilePicture);
img[0].setAttribute("alt", `${profilePicture}`);
img[0].setAttribute("title", `${profilePicture}`);

/* Step 5 - Array */
let favoriteFoods = ["Tacos", "Harissa Meatballs", "Chlebicky", "Bell Peppers"]
let newFood = 'Godiva Cheesecake'

let foodLength = favoriteFoods.lenth;
console.log(typeof(index));
favoriteFoods.map((item, index)=> {index < foodLength-1 ? foodElement.innerHTML += `<strong>${item}</strong>`: foodElement.innerHTML += `<strong>${item}</strong>.<br>`} )
favoriteFoods.push(newFood);

favoriteFoods.map((item, index)=> {index < foodLength ? foodElement.innerHTML += `<em>${item}</em>`: foodElement.innerHTML +=` ${item}.<br>`});

favoriteFoods.shift();
favoriteFoods.map((item, index)=> {index < foodLength-1 ? foodElement.innerHTML += `<em>${item}</em>`: foodElement.innerHTML +=` ${item}.<br>`});

favoriteFoods.pop();
favoriteFoods.map((item, index)=> {index < foodLength-2 ? foodElement.innerHTML += `<em>${item}</em>`: foodElement.innerHTML +=` ${item}.<br>`});




