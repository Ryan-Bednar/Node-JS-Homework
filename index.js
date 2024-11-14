// TODO: Include packages needed for this application
// importing inquirer package
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import FileSystem from 'fs';
// TODO: Create an array of questions for user input
//list of questions to ask the user
const questions = ['Please provide the title of your project.', 
    'Please provide a description of your project.',  
    'Please provide the table of contents for this ReadME.',
    'Please provide usage information.', 
    'Please provide license information.', 
    'Please provide instructions on how to contribute to your project.', 
    'Please provide any tests you have written.', 
    'Please include any questions you may have.',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //write the data to the file
    FileSystem.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('File created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    //prompt the user with the questions
    inquirer   
        .prompt([
            {
                type: 'text',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'text',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'text',
                message: questions[2],
                name: 'tableOfContents'
            },
            {
                type: 'text',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
            },
            {
                type: 'text',
                message: questions[5],
                name: 'contributing'
            },
            {
                type: 'text',
                message: questions[6],
                name: 'tests'
            },
            {
                type: 'text',
                message: questions[7],
                name: 'questions'
            }
        ]  
    ).then((response) => {
        //create the README file with the user's responses
        writeToFile('README.md', generateMarkdown(response));
    });
}
// Function call to initialize app
init();
