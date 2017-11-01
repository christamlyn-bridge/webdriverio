var FindPage = require('../pages/find.page.js');
describe('find my school', function () {
    it('can enter text into search bar', function () {
        FindPage.open();
        FindPage.searchFor('kenya');
        expect(FindPage.searchBar.getValue()).to.contain('kenya');
    });
});