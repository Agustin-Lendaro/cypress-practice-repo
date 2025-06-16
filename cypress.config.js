const { defineConfig } = require("cypress");
const { rm }= require('fs');
//const { resolve } = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        deleteFolder(folderName) {
          return new Promise((resolve, reject) => {
            rm(folderName, {maxRetries: 3, recursive: true}, (err) => {
              if(err) {
                console.log(err)
              }
              resolve(null)
            })
          })
          
          
        },
      })
    },
  },
})
