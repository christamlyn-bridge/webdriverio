var Page = require('./main.page.js')
var FindMySchoolPage = Object.create(Page, {

    searchBar: { get: function () { return browser.element('#search-bar'); }},
    useMyLocationButton: {get: function() {return browser.element('#use-my-location'); }},
    searchButton: { get: function () { return browser.element('#search-button'); }},

    open: { value: function() {
        Page.open.call(this, '');
    } },
    searchFor: { value: function(a) {
        this.searchBar.setValue(a);
    } },
    getSearchBarValue: {value: function() {
        this.searchBar.getValue();
    } },
    getSearchValue: { value: function() {
        browser.getValue('#search-button');
    } },
    clickButton: {value: function() {
        this.searchButton.click();
        browser.pause(3000);
    }},
    clickUseMyLocation: {value: function() {
        this.useMyLocationButton.click();
        browser.pause(3000);
    }},
    acceptUseMyLocation: {value: function() {
        browser.alertAccept();
    }},
    getAlertText: {value: function() {
        browser.alertText();
    }}

});
module.exports = FindMySchoolPage;