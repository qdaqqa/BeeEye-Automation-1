const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
const title = require("../../Page/Title");
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


describe('Flows Page : Test if Create new flow, Edit flow, Delete flow and check if the flow card display correctly', function () {
   before(function (browser, done) {
    browser.waitForElementVisible('body', configrationReader.getPeriod()) 
    done();
   });

     after(function (browser, done) {
        browser.end(function () {
          browser.waitForElementVisible('body', configrationReader.getPeriod()) 
            console.log("End Browser");
            done();
        });
    });

    beforeEach(function (browser, done) {
      browser.waitForElementVisible('body', configrationReader.getPeriod()) 
      logReport.log(this, "Open the site");
      setup.lunchBrowser(browser,'');
      logReport.log(this, "Login with valid Information");
      loginPage.LoginWithValidInformation(browser);
      browser.click(FlowsSelector.elements.SubmitButton);
      logReport.log(this, "Check The title of the Page");
      title.getTitle(browser);
      console.log("before each");
      done();
  });

  afterEach(function (browser, done) {
    browser.waitForElementVisible('body', configrationReader.getPeriod()) 
    done();
});

//New flow
it('Create New Flow', function(browser) {
 
  //setup.logTestDetails(this, "Try to Create New Flow")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for Create New Flow");
    browser.end();
});


//Upload File to new Flow
it('Upload File : Uploading File is successfully' , function(browser){
  setup.logTestDetails(this, " Try to test if Upload file is successfully ")
  Flows.CreateNewFlowAndUploadFile(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot after uploading File is successfully");
  browser.end();
});





//Edit Flow
it('Edit Flow', function(browser) {
  setup.logTestDetails(this, "Try to Edit the Flow ")
  Flows.EditFlow(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for Edit the Flow");
  browser.end();
	
});

//Delete Flow 
it('Delete Flow' , function(browser){
  setup.logTestDetails(this, "Try to Delete the flow")
  Flows.DeleteFlow(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for Delete the flow");
  browser.end();


});


//Card in the Flows Page
it('Card in Flows Page ' , function(browser){
  setup.logTestDetails(this, "Try to test if the flow card display correctly or not")
  Flows.FlowCard(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the flow card display in FLOWS Page");
  browser.end();


});


//Sort by Name
it('Sort by Name' , function(browser){
  setup.logTestDetails(this, " Try to test if sort Sort by Name process works well ")
  Flows.SortByName(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Name sort Descending");

  Flows.SortByName(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Name sort Ascending");
 
  browser.end();
});

//sort by Gini
it('Sort by Gini' , function(browser){
  setup.logTestDetails(this, " Try to test if Sort by Gini process works well ")
  Flows.SortByGini(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Gini sort Ascending");
  Flows.SortByGini(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Gini sort Descending");
  browser.end();
});

//Sort by Date created
it('Sort by Date created' , function(browser){
  setup.logTestDetails(this, " Try to test if Sort by Date created process works well ")
  Flows.SortByDateCreated(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Date create sort Ascending");
  Flows.SortByDateCreated(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Date create sort Descending");
  browser.end();
}); 

//No File Chosen
it('Upload File : No File Chosen' , function(browser){
  setup.logTestDetails(this, "When No file was chosen ")
  Flows.CreateNewFlow(browser);
  Flows.NoFileChosen(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot When No file was chosen");

  browser.end();
});
 
//Upload File extension is not CSV
it('Upload File : The upload file extension is not CSV' , function(browser){
  setup.logTestDetails(this, " Try to test When The upload file extension is not CSV")
  Flows.CreateNewFlow(browser);
  Flows.ExtensionOfTheFileUploaded(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot When The upload file extension is not CSV");
  browser.end();
});



//Check after You upload the file, if File Information section have the correct data and check Data if are display in Preview Data section
it('Upload File : Check The data after you upload the file' , function(browser){
  setup.logTestDetails(this, " Try to heck The data after you upload the file")
  Flows.CreateNewFlowAndUploadFile(browser);
  Flows.CheckDataAfterYouUploadFile(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the File Information Section after you upload the file");
  browser.end();
});

//Check two cases once when you select valid label and another one select not valid label
it('Valid Label : Check when you select valid label ' , function(browser){
  setup.logTestDetails(this, " Try to Check when you select valid label")
  Flows.CreateNewFlowAndUploadFile(browser);
  Flows.SelectValidLabel(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot after you select valid label");
  browser.end();
});

it('Not Valid Label : Check when you select not valid label' , function(browser){
  setup.logTestDetails(this, " Try to Check when you select not valid label")
  Flows.CreateNewFlowAndUploadFile(browser);

  Flows.SelectNotValidLabel(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot after you select not valid label");

  browser.end();
});

//Run DataSources
it('Run DataSources' , function(browser){
  setup.logTestDetails(this, " Try to Run DataSources after you upload correct file and select valid label")
  Flows.CreateNewFlowAndUploadFile(browser);
  Flows.SelectValidLabel(browser);
  Flows.RunDataSources(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot after you Click on DataSources butto to run it ");
  browser.end();
});



//Log File without error
it('Log File without error' , function(browser){
  setup.logTestDetails(this, " Try to verify no errors display in the log file")
  Flows.CreateNewFlowAndUploadFile(browser);
  Flows.SelectValidLabel(browser);
  Flows.RunDataSources(browser);
  Flows.VerifyTheLogFile(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot after you Run DataSources and no errors are display in Log File");
  browser.end();
});

//Verify Data Sources section is display as expected
it('Verify Data Sources section in Flow Page' , function(browser){
  setup.logTestDetails(this, " Try to verify the Data Sources section is display as expected After you Upload File for the New Flow")
  Flows.CreateNewFlowAndUploadFile(browser);
  Flows.VerifyDatasourceSection(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for Data Sources section after you Upload File to the new Flow");
  browser.end();
});

});
