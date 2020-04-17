const inquirer = require('inquirer'); // Used to access the inquirer package

// Object used to prompt questions into terminal
inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "password",
        message: "What is your password",
        name: "password"
    },
    {
        type: "password",
        message: "Re-enter your password",
        name: "confirim"
    }
]).then(function(response) {
    if(response.confirim == response.password) {
        console.log("Success!")
    } else {
        console.log("You forgot your password already?!");
    }
})