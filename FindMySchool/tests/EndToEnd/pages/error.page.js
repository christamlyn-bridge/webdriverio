var Page = require('./main.page.js')
var errorPage = Object.create(Page, {
    viewSchools: { get: function () { return browser.element('#view-schools'); }},
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '');
    } },
    clickViewSchoolsButton: { value: function() {
        this.viewSchools.click();
    } },    
});
module.exports = errorPage;