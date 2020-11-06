// Link Inquirer to JS File
const inquirer = require('inquirer')

// array of questions for user
const questions = [
    `What is the name of your project?`, 
    `Briefly describe your project`,
    `What needs to be installed?`,
    `How does your project work?`,
    `What License does it use?`,
    `How can someone contribute to this project?`,
    'How do you test your project?',
    `What is your Github URL?`,
    `What is your email?`
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
const init = () => {
    inquirer
        .prompt([{
            type: 'input',
            message: questions[0],
            name: "title"
        }, {
            type: 'input',
            message: questions[1],
            name: 'description'
        },{
            type: 'input',
            message: questions[2],
            name: 'install'
            
        },{
            type: 'input',
            message: questions[3],
            name: 'usage'
        },{
            type: 'list',
            message: questions[4],
            choices: ['MIT', 'Apache', 'GNU', 'Mozilla', 'IBM', "ISC"],
            name: 'license'
        },{
            type: 'input',
            message: questions[5],
            name: 'contact'
        },{
            type: 'input',
            message: questions[6],
            name: 'test'
        },{
            type: 'input',
            message: questions[7],
            name: 'github'
        },{
            type: 'input',
            message: questions[8],
            name: 'email'
        }
        ]).then(response =>{
            console.log(response.title)
            console.log(response.description)
            console.log(response.install)
            console.log(response.usage)
            console.log(response.license)
            console.log(response.contact)
            console.log(response.test)
            console.log(response.github)
            console.log(response.email)

        })
}

// function call to initialize program
init();
