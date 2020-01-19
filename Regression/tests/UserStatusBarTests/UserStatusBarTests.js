const UserStatusBar = require("../../Page/UserstatusBar");
const loginPage = require("../../Page/login");
const title = require("../../Page/Title");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const {
    assert
} = require('chai')
const {
    expect
} = require('chai')

describe('User Status Bar', function () {

   before(function (browser, done) {
    logReport.log(this, "Test Cases for Main Navigation Bar");
        console.log("Test Cases for Main Navigation Bar"); 
    done();

   });

   after(function (browser, done) {
    browser.end(function () {
        console.log("End Browser");
        done();
    });
});
  
beforeEach(function (browser, done) {
    logReport.log(this, "before each test case : open the site");
    setup.lunchBrowser(browser,'');
    logReport.log(this, "before each test case : Login with valid Information");
    loginPage.LoginWitValidInformation(browser);
    logReport.log(this, "before each test case : Check The title of the Page");
    title.getTitle(browser);
    console.log("before each");
    done();
});

afterEach(function (browser, done) {
    console.log("after each");
    done();
});

//User Status Bar is display
it('Is User Status Bar Display', function(browser) {
 
    setup.logTestDetails(this, "Check if User Sattus Bar is display or not after you login Successfully")
    UserStatusBar.IsUserStatusBarDisplay(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results for checking if User Status Bar is display or not");
    browser.end();
});

//About Link
it('About Link', function(browser) {
    setup.logTestDetails(this, "Try to Click on About Link and check if it takes you to correct screen ")
    UserStatusBar.AboutLink(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results after you click on About Link");
    browser.end();
});

//system diagnostics Link
it('System diagnostics Link', function(browser) {
 
    setup.logTestDetails(this, "Try to Click on System diagnostics Link and check if it takes you to correct screen ")
    UserStatusBar.SystemDiagnosticsLink(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results after you click on System diagnostics Link");
    browser.end();
});

//Log Out Link
it('LogOut Link', function(browser) {
 
	logReport.log(this, "Try to Click on LogOut Link and check if it takes you to correct screen ");
    UserStatusBar.LogOutLink(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results after you click on LogOut Link");
    browser.end();
});



});


