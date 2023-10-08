/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jenni Eslinger",
    photo: "images\\profile.jpg",
    favoriteFoods: [
        "Tacos", 
        "Harissa Meatballs", 
        "Chlebicky", 
        "Bell Peppers", 
        "Godiva Cheesecake",
    ],
    hobbies: [
        "Cooking",
        "Spending time outside",
        "Playing games with my kids",
        "Traveling",
        "Reading",
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Arizona",
        length: "33 years",
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src="images//profile.jpg".alt="Jenni Eslinger">


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place;
    document.querySelector("#places-lived").appendChild(dt);
});

myProfile.placesLived.forEach(length => {
    let dd = document.createElement("dd");
    dd.textContent = length;
    document.querySelector("#places-lived").appendChild(dd);
});