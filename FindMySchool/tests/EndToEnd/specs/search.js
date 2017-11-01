var FindPage = require('../pages/find.page.js');
var ResultsPage = require('../pages/search.page.js');
var ErrorPage = require('../pages/error.page.js');
describe('search results', function () {
    it('returns results', function () {
        FindPage.open();
        FindPage.searchFor('Githiga');
        FindPage.clickButton();
        expect(ResultsPage.searchResults.getText()).to.contain('Githiga-KBU');
    });

    it('could not find location', function () {
        FindPage.open();
        FindPage.searchFor('jfpdjfpsjfdsjpodsjfpo');
        expect(ResultsPage.couldNotFind.isVisible()).to.be.false;
        FindPage.clickButton();
        expect(ResultsPage.couldNotFind.isVisible()).to.be.true;
    });

    it('can view all schools on error', function () {
        FindPage.open();
        FindPage.searchFor('jfpdjfpsjfdsjpodsjfpo');
        expect(ResultsPage.couldNotFind.isVisible()).to.be.false;
        FindPage.clickButton();
        expect(ResultsPage.couldNotFind.isVisible()).to.be.true;
        ErrorPage.clickViewSchoolsButton();
        expect(browser.getUrl()).to.equal('https://www.google.com/maps/search/kenya+bridge+international+academies/');
    });
});