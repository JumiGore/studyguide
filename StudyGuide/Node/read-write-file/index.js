// Standard Library for reading and writing files
const fs = require('fs');

// Asynchronist method for reading file
fs.readFile('readMe.txt', 'utf8', function(err,data) {
    console.log(data);
})

// Asynchronist method for writing to file
fs.writeFile('readMe.txt', process.argv[2], function(err){
    if(err) {
        console.log("uh oh")
    } else {
        console.log(process.argv[2]);
        console.log("Success!");
    }
})