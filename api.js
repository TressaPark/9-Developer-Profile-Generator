//create api call via axios
const axios = require("axios");

//generate markdown
const genMd = require("./Markdown")
const api = {
  getUser(username,response) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(res)  {

      //console log to get email and avatar
      console.log(res.data.email);
      console.log(res.data.avatar_url);
      genMd.generateMarkdown(res,response)

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