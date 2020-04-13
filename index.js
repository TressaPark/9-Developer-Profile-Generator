// inquirer set up
const inquirer = require("inquirer");
// api call
const apiCall = require("./utils/api");
// answers
function promptUser() {
// questions for user
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Enter your project title."
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description."
  },  
    // {
    //   // I think this is actually done in the api.js code
    //   // type: "input",
    //   // name: "github profile picture",
    //   // message: "Include your Github profile picture."
    // },
    {
      type: "input",
      name: "badges",
      message: "What are your project badges?"
    },
    {
      // I want the TOC to have hyperlinks to the various areas of the README. Maybe this will work out as I go along?
      type: "input",
      name: "table of contents",
      message: "Enter your table of contents."
    },
    {
      type: "input",
      name: "installation",
      message: "Enter the installation instructions for your program."
    },
    {
      type: "input",
      name: "usage",
      message: "Enter any additional information not included in the description."
    },
    {
      type: "input",
      name: "license",
      message: "Enter the license name and link to the license content."
    },
    {
      type: "input",
      name: "contributers",
      message: "Who contributed to your project?"
    },
    {
      type: "input",
      name: "tests",
      message: "Explain how to run the automated tests for this system."
    },
    {
      type: "input",
      name: "user name",
      message: "Enter your Github username."
    },
    {
      type: "input",
      name: "github email",
      message: "Enter your Github email."
    },
  ]);
}

//function generateHTML(answers) 
// {
//   return

// Is the code below corrret?

promptUser()
  // .then(function(answers) {
  //   const html = generateHTML(answers);

  //   return writeFileAsync("index.html", html);
  // })
  // .then(function() {
  //   console.log("Successfully wrote to index.html");
  // })
  // .catch(function(err) {
  //   console.log(err);
  // });



// Thank you to my tutor Vivian Nguyen, Jill  Westerfelhaus, wikipedia.com, welcometothejungle.com, and my classwork at NU