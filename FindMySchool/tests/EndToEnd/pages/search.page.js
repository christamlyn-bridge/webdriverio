// login.page.js
var Page = require('./main.page.js')
var searchResults = Object.create(Page, {
    /**
     * define elements
     */
    searchResults: { get: function () { return browser.element('//div[@id="academy-card-0"]'); }},
    couldNotFind: {get: function () {return browser.element('#could-not-find');}},
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '');
    } },
    getSchool: { value: function() {
        this.searchResults.getText();
    } },
    isCouldNotFindVisible: { value: function() {
        browser.isVisible('#couldNotFind');
    } },
    resultsDisplayed: { value: function() {
        this.searchResults.isVisible();
    } },
    getError: { value: function() {
        this.couldNotFind.getText();
    } }

});
module.exports = searchResults;