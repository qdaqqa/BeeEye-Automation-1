

const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
const title = require("../../Page/Title");
const FlowEditDS = require("../../Page/FlowEditDS");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const configrationReader = require("../../utils/configrationReader");
const FlowsSelector = require("../../Selectors/FlowsSelector");

const {
  assert
} = require('chai')
const {
  expect
} = require('chai')
describe('Dashboard Page : Test if these section are display or not: Best Flow(GINI) , System Statistics , Top Flows , Platform Staistics , Recent Viewed Flows', function () {

    before(function (browser, done) {
        logReport.log(this, "Test Cases for Flow Edit - DS");
        done();

    });

    after(function (browser, done) {
        browser.end(function () {
            console.log("End Browser");
            done();
        });
    });

    beforeEach(function (browser, done) {
        logReport.log(this, "Open the site");
        setup.lunchBrowser(browser, '');
        logReport.log(this, "Login with valid Information");
        loginPage.LoginWithValidInformation(browser);
        logReport.log(this, "Check The title of the Page");
        title.getTitle(browser);
        console.log("before each");
        done();
    });

    afterEach(function (browser, done) {
        done();
    });
    /*
    //Verify user is navigated to the last confguring step for the selected flow
        it('Verify user is navigated to the last confguring step for the selected flow', function (browser) {
            setup.logTestDetails(this, "Try to Verify user is navigated to the last confguring step for the selected flow")
            //Flows.CreateNewFlow();
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            browser.end();
        });
         
        //Upload CSV file to not new flow
    it('Verify Upload CSV file function is working as expected', function (browser) {
        setup.logTestDetails(this, "Try to Verify Uploading CSV file function is working as expected")
        Flows.CreateNewFlow(browser);
        Flows.UploadFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload File");
        browser.end();
    });

    //Select a new Label
    it('Verify Selecting a new Label', function (browser) {
        setup.logTestDetails(this, "Try to Verify Select a new Label")
        Flows.CreateNewFlow(browser);
        Flows.UploadFile(browser);
        Flows.SelectValidLabel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select a new Label");
        browser.end();
    });

    //Run the Data Source
    it('Run the Data Source', function (browser) {
        setup.logTestDetails(this, "Try to Run the Data Source")
        Flows.CreateNewFlow(browser);
        Flows.UploadFile(browser);
        Flows.RunDataSources(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Run the Data Source");
        browser.end();
    });

    //Verify no errors displayed in the log file
    it('Verify no errors displayed in the log file', function (browser) {
        setup.logTestDetails(this, "Try to Verify no errors displayed in the log file")
        Flows.CreateNewFlow(browser);
        Flows.UploadFile(browser);
        Flows.SelectValidLabel(browser);
        Flows.VerifyTheLogFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the log file with no errors");
        browser.end();
    });


    //Verify label section is displayed as expected
    it('Verify label section is displayed as expected', function (browser) {
        setup.logTestDetails(this, " Try to verify Verify label section is displayed as expected")
        Flows.CreateNewFlow(browser);
        FlowEditDS.LabelSection(browser)
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for label section after you create new flow");
        browser.end();
    });
*/
    //Select label with more than 2 values - show error message
    it('Verify the error message was displayed when you select not valid Label', function (browser) {
        setup.logTestDetails(this, " Try to verify the error message was displayed when you select not valid Label")
        Flows.CreateNewFlow(browser);
        Flows.UploadFile(browser);
        Flows.SelectNotValidLabel(browser)
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select not valid Label");
        browser.end();
    });


});