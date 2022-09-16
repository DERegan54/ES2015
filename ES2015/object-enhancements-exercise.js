// Same keys and values ES2015
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// Computed Property Names ES2015
let favoriteNumber = 42
const instructor = {
    firstName : "Colt",
    [favoriteNumber]: "That is my favorite!"
}


// Object Methods
const instructor = {
    firstName : "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye!";
    }
}   


// Create Animal Function
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}
