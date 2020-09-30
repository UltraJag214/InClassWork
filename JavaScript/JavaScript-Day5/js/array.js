let fruits = [
    { icon: '🍉', name: "Watermelon" }, 
    { icon: '🍌', name: "Banana" }, 
    { icon: '🍓', name: "Strawberry" }, 
    { icon: '🍎', name: "Apple" },
    { icon: '🍍', name: "Pineapple" },
    { icon: '🍋', name: "Lemon" },
    { icon: '🍇', name: "Grape"}
];
let text = "<ul>";

for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    //text += "<li>" + fruit.icon + ' ' + fruit.name + "</li>";
    text += `<li>${fruit.icon} ${fruit.name}</li>`;
}

text += "</ul>"

let fruitListElm = document.getElementById('fruit-list');

fruitListElm.innerHTML = text;


let cars = [
    'Subaru',
    'Ford',
    'Toyota',
    'Jeep',
];

document.getElementById("cars").innerText = cars;
document.getElementById("cars2").innerText = cars[1];

cars[0] = "Tesla";

document.getElementById("cars3").innerText = cars;

document.getElementById("car-count").innerText = cars.length;

cars[cars.length] = "Mercedes";

document.getElementById("car-again").innerText = cars;