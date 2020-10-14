// recipe object

function createRecipe (name) {
    const recipe = Object.create(addIngredientFunction);
    recipe.name = name;
    recipe.ingredients = [];
    recipe.instructions = '';
    recipe.servings = '';
    return recipe;
}


const addIngredientFunction = {
    addIngredient: function (name, quantity) {
        this.ingredients.push({name: name, qty: quantity})
    }
}

let myRecipe = createRecipe("Chocolate Chip Cookies");

// Pair Programming Challenge 1

function makePerson (name, age) {
    const person = Object.create(null);
    person.name = name;
    person.age = age;
    return person;
}

let person1 = makePerson("Grant", "21");

// Pair Programming Challenge 2

const personStore = {
    greet: function() {console.log("hello")}
}

function personFromPersonStore(name, age) {
    const newPerson = Object.create(personStore);
    newPerson.name = name;
    newPerson.age = age;
    return newPerson;
}

personStore.introduce = function() {
    console.log(`Hi my name is ${this.name}`)
}

let person2 = personFromPersonStore("Grant", "21");

// Pair Programming Challenge 3

// function personConstructor () {
//     this.greet = function() {
//         console.log("Aloha")
//     }
// }

function personFromConstructor(name,age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Aloha")
    }
}

personFromConstructor.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}`)
}

let person3 = new personFromConstructor("Hayden", 17);

// Pair Programming Challenge 4

class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Aloha');
    }
}

class DeveloperClass extends PersonClass {
    introduce() {
        console.log(`Aloha, my name is ${this.name}`);
    }
}

let developer = new DeveloperClass("Jim");