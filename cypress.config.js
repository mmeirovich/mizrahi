// const { defineConfig } = require("cypress");

module.exports = {
  'projectId': '4b7344',
  
  e2e: {
    supportFile: false,
    testIsolation: false,
    env: {
      usr: 'user',
      pwd: 'pwd',
    },
  },
}
