const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "employee",
      message: "enter new employee",
      choices: ["manager", "engineer", "intern"],
    },
  ])
  .then((employee) => {
    if (employee.employee === "manager") {
      console.log("yay");
    } else if (employee.employee === "engineer") {
    } else if (employee.employee === "intern") {
    }
  });
