//create api call via axios
const axios = require("axios");

const fs = require("fs");
const util= require("util");
const writeFileAsync = util.promisify(fs.writeFile);


//generate markdown
const genMd = require("./generateMarkdown");

const api = {
  getUser(username,response) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(res)  {

      //console log to get email and avatar
      console.log(res.data.email);
      console.log(res.data.avatar_url);
      
       writeFileAsync("Readme.html", genMd.generateMarkdown(res, response));
      

      //check for errors
    }).catch(function(error) {
      if (error) {
        console.log (error)
      } 

      // No errors
      else {
        console.log ("Success!")
      }
    })
  }
  
};

module.exports = api;