var fs = require('fs');
var userInput = process.argv[2];

// call appendFile method passes the name of file, user input, new line allows
// content to be added to next line, function err in case of error
fs.appendFile('append.txt', userInput + "\n", function(err){
    if(err) {
        console.log("uh oh")
    }
    console.log("Wrote \"" + userInput + "\"" + " to file");
})