
// Given this function:

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 ===0
    });
}

// Refactor it to use the rest operator & an arrow function:
const filterOutOdds = (...arguments) => arguments.filter(value => value % 2 ===0)



// FindMIN
function findMin(...arguments) {
    return Math.min(...arguments); 
}
// OR:
const findMin = (...arguments) => Math.min(...arguments)




// mergeObjects
function mergeObjects(object1, object2) {
    return ({...object1, ...object2});
}

// OR:
const mergeObjects = (object1, object2) => ({...object1, ...object2})


// doubleAndReturnArgs
function doubleAndReturnArgs1(array, ...arguments) {
    return [...array, ...arguments.map(function(variable){
        return variable * 2;
    })];  
}
// OR:
const doubleAndReturnArgs2=(array, ...arguments) => [...array, ...arguments.map(variable => variable *2)]




// Slice and Dice!

function removeRandom(items) {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(index + 1)]; 
}


function extend(array1, array2){
    return [...array1, ...array2];
}


function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}