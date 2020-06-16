const inquirer = require("inquirer");
const fs = require("fs");

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
            name: "status1",
            message: "what is your status on the team ",
            choices: ["manager", "engineer", "intern"],
          },
          {
            type: "list",
            name: "status2",
            message: "what is your peers status on the team",
            choices: ["manager", "engineer", "intern"],
          },
        ])
        .then((answers) => {
          if (answers.status1 === "manager") {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "name",
                  message: "What is your name",
                },
                {
                  type: "input",
                  name: "officeNumber",
                  message: "whats your office number?",
                },
              ])
              .then((answers) => {
                const readMeFun = () => {
                  return `
                    
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title></title>
                    </head>
                    <body>
                        
                    </body>
                   
                    `;
                };

                const readMe = readMeFun();

                fs.appendFile("team.html", readMe, (err) => {
                  if (err) throw err;
                  console.log("The file has been saved!");
                });
              });
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
