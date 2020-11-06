// Link Inquirer to JS File
const fs = require('fs');
const inquirer = require('inquirer')

// array of questions for user
const questions = [{
    type: 'input',
    message:`What is the name of your project?`, 
    name: "title"
}, {
    type: 'input',
    message:`Briefly describe your project`,
    name: 'description'
},{
    type: 'input',
    message: `What needs to be installed?`,
    name: 'install'
    
},{
    type: 'input',
    message:`How does your project work?`,
    name: 'usage'
},{
    type: 'list',
    message: `What License does it use?`,
    choices: ['MIT', 'Apache', 'GNU', 'Mozilla', 'IBM', "ISC"],
    name: 'license'
},{
    type: 'input',
    message:`How can someone contribute to this project?`,
    name: 'contact'
},{
    type: 'input',
    message:'How do you test your project?',
    name: 'test'
},{
    type: 'input',
    message:`What is your Github URL?`,
    name: 'github'
},{
    type: 'input',
    message:`What is your email?`,
    name: 'email'
}
];

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data)
}

// function to initialize program
const init = () => {
    inquirer.prompt(questions).then( response => {
        
        let fileName = response.title.split(" ").join("") + '.md'
        writeToFile(fileName, response)
        
        }) 
    }

// function call to initialize program
init();
