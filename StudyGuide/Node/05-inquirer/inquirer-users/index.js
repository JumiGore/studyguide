const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: [
            'English',
            'Spanish',
            'JavaScript',
            'HTML'
        ]
    },
    {
       type: 'list',
       message: 'What is your preferred method of communication?',
       name: 'language',
       choices: [
           'Email',
           'Text',
           'Page',
           'Snapchat'
       ] 
    }
]).then(function(response) {
    var filename = response.name.toLowerCase().split(" ").join("") + ".json"; // creates the .json file 
    fs.writeFile(filename, JSON.stringify(response, null, 2), function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log("SUCCESS!")
        }
    })
})