const FlowEditDataExplorationSelectors = require("../Selectors/FlowEditDataExplorationSelectors");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Verify that export button is displayed and no errors displayed after exporting 
exports.Exportbutton = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.ExportButton, 'The assertion failed because the Export Button was not displayed in Feature List page')
        .click(FlowEditDataExplorationSelectors.elements.ExportButton)
        .pause(configrationReader.getDelayValue())
}

//Verify pagination is displayed 
exports.Pagination = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.Pagination, 'The assertion failed because the Pagination wrapper was not displayed in Feature List page')
        .pause(configrationReader.getPauseValue())
}


//Verify search is working correctly 
exports.SearchInFeatureList = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.SearchField, 'The assertion failed because the Search by feature name field was not display in Feature List Page')
        .setValue(FlowEditDataExplorationSelectors.elements.SearchField, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.FirstRowAfterSearch, 'The assertion failed after you search on Feature name because the Row for this feature was not display')
        .assert.containsText(FlowEditDataExplorationSelectors.elements.FirstRowAfterSearch, configrationReader.getFeature(), 'The assertion failed after you search on Feature name because the Result for the search has not contained the feature name that you searched on')
        .pause(configrationReader.getPauseValue())
}