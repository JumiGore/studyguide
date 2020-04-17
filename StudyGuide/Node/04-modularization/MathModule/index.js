// importing math.js
const math = require("./math");

// initializing operation to third element 
// on the command line
var operation = process.argv[2];

// initializing numOne and numTwo to the fourth
// and fifth elements inputted the command line 
var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);

// switch for conditional based on operation
switch (operation) {
    case "sum":
        console.log(math.sum(numOne, numTwo));
        break;
    case "difference":
        console.log(math.difference(numOne, numTwo));
        break;
    case "product":
        console.log(math.product(numOne, numTwo));
        break;
    case "quotient":
        console.log(math.quotient(numOne, numTwo));
        break;
    default:
        console.log("Check your maths!")

}
