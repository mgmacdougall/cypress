import LandingPagePO from './pages/LandingPage.PO';
import SearchPagePO from './pages/SearchPage.PO';

describe('Functional Test: Search', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/');
  });

  it('Should validate the Search is enabled', () => {
    LandingPagePO.validateSearchInputExists();
  });

  it('Should validate text can be entered and error page displays', () => {
    LandingPagePO.searchInputText('test');
    SearchPagePO.validateSearchResultInvalidPageExist('test');
    SearchPagePO.validateSearchInputInvalidMessage(
      'Your search returned no results.'
    );
  });

  it('Should validate the search "Breadcrumb" ', () => {
    LandingPagePO.searchInputText('Yoga');
    SearchPagePO.validateSearchBreadCrumb("Search results for: 'Yoga'");
  });

  it('Should validate a correct search of "Yoga" results in "Gear (9)" items', () => {
    LandingPagePO.searchInputText('Yoga');
    SearchPagePO.validateSearchResultsByFilter('Gear 9');
  });

  it('Should validate a correct search results in a default display of 12 cards ', () => {
    LandingPagePO.searchInputText('Yoga');
    SearchPagePO.validateSearchResultsByFilter('Gear 9');
    SearchPagePO.validateSearchResultCardDisplayCount(12);
  });

  it('Should validate changing the results to display to "24" results in "24 cards displaying', () => {
    LandingPagePO.searchInputText('Yoga');
    SearchPagePO.selectDisplayResults('24');
    SearchPagePO.validateSearchResultCardDisplayCount(24);
  });
});
