const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "number",
      name: "project",
      message: "how many many people in your team",
    },
  ])
  .then((answers) => {
    if (answers.project === 1) {
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee",
            message: "what is your status on the team ",
            choices: ["manager", "engineer", "intern"],
          },
        ])
        .then((answers) => {});
    } else if (answers.project === 2) {
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee",
            message: "what is your status on the team ",
            choices: ["manager", "engineer", "intern"],
          },
        ])
        .then((answers) => {
          if (answers.employee === "manager") {
            inquirer.prompt([
              {
                type: "input",
                name: "name",
                message: "What is your name",
              },
            ]);
          } else if (answers.employee === "engineer") {
          } else if (answers.employee === "intern") {
          }
        });
    } else if (answers.project === 3) {
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee",
            message: "what is your status on the team ",
            choices: ["manager", "engineer", "intern"],
          },
        ])
        .then((answers) => {});
    }
  });
