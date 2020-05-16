const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees =[];

function employeeType() {
    inquirer.prompt([{
                type: 'list',
                name: 'employeeType',
                message: 'What employee do you want to enter?',
                choices: ['Engineer' ,'Manager', 'Intern', 'No Employee']
            }
        ]
    ).then(response => {
        switch(response.employeeType){
        case 'Engineer':
            createEngineer();
            break;
        case 'Manager':
            createManager();
            break;
        case 'Intern':
            createIntern();
            break;  
        default:
            let htmlString = render(employees)

            fs.writeFile(outputPath, htmlString, function (error){
                if (error){
                    throw error;
                }
            })
        }
    })
}

const engineerQuestions = [
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your Name?',
        },
        {
            type: 'input',
            name: 'idNumber',
            message: 'What is your ID Number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your GitHub Username?',
        }
    ];

    const managerQuestions = [
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your Name?',
        },
        {
            type: 'input',
            name: 'idNumber',
            message: 'What is your ID Number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
        }
        ];
    const internQuestions = [
        {
            type: 'input',
            name: 'internName',
            message: 'What is your Name?',
        },
        {
            type: 'input',
            name: 'idNumber',
            message: 'What is your ID Number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
        }
    ];

function createEngineer() {
    inquirer.prompt(engineerQuestions).then(response => {
        const engineer = new Engineer(response.engineerName, response.idNumber, response.email, response.githubUser)
        employees.push(engineer)
    });
};

function createManager() {
    inquirer.prompt(managerQuestions).then(response => {
        const manager = new Manager(response.managerName, response.idNumber, response.email, response.office)
        employees.push(manager)
    });
};

function createIntern() {
   inquirer.prompt(internQuestions).then(response => {
        const intern = new Intern(response.internName, response.idNumber, response.email, response.school)
        employees.push(intern)
    });
};

employeeType();
