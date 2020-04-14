// inquirer set up
const inquirer = require("inquirer");
// api call

const fs = require("fs");
const util= require("util");
const apiCall = require("./utils/api");

const writeFileAsync = util.promisify(fs.writeFile);

// answers
function promptUser() {
// questions for user
return inquirer.prompt([
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
    // {
    //   type: "input",
    //   name: "badges",
    //   message: "What are your project badges?"
    // },
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
      name: "username",
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

// async function init(){
//   console.log("hi")
//   try {
//     const answers = await promptUser()
//       .then(function(answers) {


//     const html=  apiCall.getUser(answers.username, answers);
//     // const html = generateHTML(answers);

     
//   }).then(function(html){
//     writeFileAsync("index.html", html);
//     console.log("Successfully wrote to index.html");
//   })
    
//   // const html = await apiCall.getUser(answers.username, answers);

//   // await writeFileAsync("index.html", html);
    

   
//   } catch(err) {
//     console.log(err);
//   }
// }

promptUser().then(function(answer){
  apiCall.getUser(answer.username, answer);
});



// promptUser()
//   .then(function(answers) {

//     const html= apiCall.getUser(answers.username, answers);
//     // const html = generateHTML(answers);

//      return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });



// Thank you to my tutor Vivian Nguyen, Jill  Westerfelhaus, wikipedia.com, welcometothejungle.com, and my classwork at NU