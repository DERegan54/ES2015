// I called separate versions of the same functions function1 and function2 

const double1 = (arr) => {
    return arr.map = (val) => {               
        return val * 2;			    
    };
} 

// ES2015 Arrow Functions Shorthand:

// One-liner:
const double2 = arr => arr.map(val => val * 2);


// Refactor the following function to use arrow functions:

// Again, I was able to refactor it, but I had to look at the answer to get it onto one line…

// Here’s what I came up with:

const squareAndFindEvens1 = (numbers) => {
	const squares = numbers.map = (num) => {
		return num ** 2;
	};
	const evens  = square.filter = (square) => {
		return square % 2 === 0;
	}
	return evens;
}

// One-liner:
const squareAndFindEvens2 = numbers => numbers.map (val => val ** 2) .filter (square => square % 2 === 0)



