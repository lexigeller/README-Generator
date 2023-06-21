// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
      },
      {
        type: 'input',
        name: 'toc',
        message: 'Please add a table of contents for your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide the steps required to install your project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for the use of your project.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for potential contributors to your project.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how to test your project.',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      })
      .catch((error) => {
        console.error(error);
      });
  }

// Function call to initialize app
init();
