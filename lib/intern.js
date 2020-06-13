const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {}

  getRole() {}
}
