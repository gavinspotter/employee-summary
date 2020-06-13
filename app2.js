const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

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
        .then((answers) => {
          if (answers.employee === "manager") {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your name",
                },
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your id",
                },
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your role",
                },
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your office number",
                },
              ])
              .then((answers) => {});
          } else if (answers.employee === "intern") {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your name",
                },
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your id",
                },
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your role",
                },
                {
                  type: "input",
                  name: "answers1",
                  message: "what is your school?",
                },
              ])
              .then((answers) => {});
          }
        });
    }

    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function (res) {
      const readMeFun = () => {
        return `
        

        
        `;
      };

      const readMe = readMeFun();

      fs.writeFile("team.html", readMe, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    });
  });
