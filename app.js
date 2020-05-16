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


//in side the function they are almost identical. Theyre each run inquire with thier specific quesitons. and inside the .then I wil creat an instance of that class.(new manager etc)
//grab the instance of created class and push it he employeed arry.
//Then ask they first question agian (employeeType function)..it will be a loop
//git
function createEngineer() {
    inquirer.prompt(engineerQuestions).then(response => {
        const engineer = new Engineer(response.engineerName, response.idNumber, response.email, response.githubUser)
        return engineer
    });
   };
function createManager() {
    inquirer.prompt(managerQuestions).then(response => {
        const manager = new Manager(response.managerName, response.idNumber, response.email, response.office)
        return manager
   });
function createIntern() {
   inquirer.prompt(internQuestions).then(response => {
        const intern = new Intern(response.internName, response.idNumber, response.email, response.school)
        return intern
   });
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
