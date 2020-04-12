const inquirer = require("inquirer");
const apiCall = require("./api");
function init() = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "user name",
      message: "What is your Github username?"
    },
    {
      type: "input",
      name: "github email",
      message: "Enter your Github email."
    },
    {
      type: "input",
      // name: "github profile picture",
      // message: "Include your Github profile picture."
    },
    {
      type: "input",
      name: "badges",
      message: "What are your project badges?"
    },
    {
      type: "input",
      name: "project title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "project description",
      message: "What is your project description?"
    },
    {
      type: "input",
      name: "table of contents",
      message: "Enter your table of contents."
    },
    {
      type: "input",
      name: "installation",
      //I don't understand the meaning of this question
      //message: "Enter your "
    },
    {
      type: "input",
      // name: "usage",
      // message: "Enter your"
    },
    {
      type: "input",
      // name: "license",
      // message: "Enter your"
    },
    {
      type: "input",
      name: "contributers",
      message: "Who contributed to your project?"
    },
    {
      type: "input",
      // name: "tests",
      // message: "Enter your."
    },
    {
      type: "input",
      // name: "tests",
      // message: "Enter your."
      },
    }
  ]);

function generateHTML(answers) 
{
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
