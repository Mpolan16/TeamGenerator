// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(school)
        //super adds github to the 3 properties of employee
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this;
    }
}

module.exports = Intern;