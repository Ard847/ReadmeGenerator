const inquirer = require('inquirer');
const fs = require("fs")
const choices = require("inquirer/lib/objects/choices");

const prompt = () => 
inquirer.prompt([{
        type : "input",
        name : "Github",
        message: "GitHub username: "
    },
{
    type:"input",
    name:"email",
    message:"email: "
},
{
    type : "input",
    name : "title",
    message: "Project title: "
},
{
    type : "input",
    name: "description",
    message: "Project description: "
},
{
    type : "input",
    name: "instructions",
    message: "Installation instructions: "
},
{
    type : "input",
    name: "usage",
    message: "Insert your usage information: "
},
{
    type : "input",
    name: "Guidelines",
    message: "Insert your contribution guidelines:"  
},
{
    type : "input",
    name: "tests",
    message: "If applicable, provide the tests written:"
},
{
    type : "list",
    name: "License",
    message: "License name:",  
    choices : ["GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla Public License 2.0","Apache License 2.0","MIT License","Boost Software License 1.0"]
},

]);

const generate = (answers) => {
    return `
#Project title: ${answers.title}
 
## Description
${answers.description}

##Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#Contribution)
* [Test](#Test)
* [License](#license)

##installation 
${answers.instructions}

##Usage  
${answers.usage}

##Contribution
${answers.Guidelines}

##Test  
${answers.tests}

##License
${answers.License}

##Questions 
Contact me:
GitHub username: ${answers.username}
Email: ${answers.email}`
}



 
 prompt().then((answers) =>{
    console.log("answers", answers)
    const readme = generate(answers)
    console.log("README",readme)
    fs.writeFileSync("README.md",readme)
}).catch( (e) =>{ console.log(e)})
 