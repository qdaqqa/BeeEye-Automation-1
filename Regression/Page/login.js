const loginSelectors =require("../Selectors/loginSelectors");
const { assert } = require('chai').assert
const { expect } = require('chai')
const setup = require("../utils/setup");
const configrationReader = require("../utils/configrationReader");

//Login without password
exports.LoginWithoutPassword = (browser) =>{
    var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .setValue(loginSelectors.elements.password,'') // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(1000); 

}


//Login Without username
exports.LoginWithoutUsername = (browser) =>{
   var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email,'') // send values
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(1000); 

}

//Login With wrong password
exports.LoginWithWrongPassword = (browser) =>{
    var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .setValue(loginSelectors.elements.password,'jj') // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(1000); 

}
//Login with wrong username
exports.LoginWithWrongUsername = (browser) =>{

    var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email, 'user') // send values
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(1000); 

}


//Login with valid information
exports.LoginWitValidInformation = (browser) =>{
  var login = browser.page.loginSelectors();
  login
  .waitForElementVisible('body', 2000) // wait till page loads
  .getTitle(function(title) {
      console.log("Page title is: "+title);
      this.assert.ok(title.includes("EyeOnRisk"));
    })

  .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
  .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
  .click(loginSelectors.elements.signInBtn)
  .expect.element(loginSelectors.elements.UserMenu).text.to.contain('itg')
  

}
