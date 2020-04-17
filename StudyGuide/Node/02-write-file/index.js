const fs = require('fs');
var userData = process.argv[2];

fs.writeFile('writeMe.txt', userData ,'\n', function(err, data) {
    if(err) {
        console.log(err)
    } else {
        console.log("Wrote " + userData + " to writeMe.txt")
        console.log("Success!");
    }
})

// Standard Library for reading and writing files
// const fs = require('fs');

// // Asynchronist method for reading file
// fs.readFile('readMe.txt', 'utf8', function(err,data) {
//     console.log(data);
// })

// Asychronous method for writing to a file 