// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./potential-enigma-main/Develop/src/page-template');
const generatePage = require('./potential-enigma-main/Develop/utils/generateMarkdown.js');

//project title, description, installation instructions, usage information, contribution guidelines, and test instructions
    //SECTIONS: Description, Installation, Usage, Contributing, and Tests
//badge options + notice(LICENSE that explains which license it is
//GitHub username + link
    //SECTIONS: Questions
//Email Address with instructions on how to reach me with additional questions
    //SECTIONS: Questions
//Links in Table of Contents

// TODO: Create an array of questions for user input PROMPTUSER
const repoQuestions = () => {
    // if(!userData.projects) {
    //     userData.projects = [];
    // }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter description of your project! (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please explain installation instructions! (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter information for usage! (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter information for usage!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines! (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter test instructions! (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: "Which license(s) would you like to use? (If none are checked, the MIT license will be applied)",
            choices: [
                "MIT",
                "IBM Public License Version 1.0",
                "GNU FDL v1.3",
                "Apache 2.0 License",
                "Eclipse Public License 1.0",
                "Boost Software License 1.0"
            ],
            default:['MIT'],
        },
        {
            type: "input",
            name: "username",
            message: "What is the username for your GitHub? (Required)",
            validate: (userAccount) => {
                if(userAccount) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Link!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address? (Required)",
            validate: (emailAddress) => {
                if(emailAddress) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            },
        },
        {
            type: "confirm",
            name: "contactInformation",
            message: "Would you like to enter additional instruction on how to reach you?",
            default: false,
        },
        {
            type: "input",
            name: "additionalInfo",
            message: "Please add any extra information that would make it easier to contact you",
            validate: (additionalInfo) => {
                return !!additionalInfo;
            },
        },
    ]);
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
            throw err;
        console.log("Data transferred to Readme.md");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(repoQuestions()
        .then(function (userResponse) {
            console.log(userResponse)
            writeToFile("README.md", generatePage(userResponse));
        })
)}

// Function call to initialize app
init();
