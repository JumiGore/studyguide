// Standard Library for reading and writing files
const fs = require('fs');

// Asynchronist method for reading file
fs.readFile('readMe.txt', 'utf8', function(err,data) {
    if(err) {
        console.log(err);
    }
    console.log(data);
})

// Asychronous method for writing to a file 
// fs.writeFile('writeMe.txt', process.argv[2],'utf8', function(err, data) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("Wrote " + data + " to writeMe.txt")
//         console.log("Success!");
//     }
// })