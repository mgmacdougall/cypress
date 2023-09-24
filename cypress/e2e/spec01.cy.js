import LandingPagePO from './pages/LandingPage.PO';

describe('magento.softwaretestingboard tests', () => {
  describe('Landing page UI checks', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/');
    });
    it('Should validate the page Header', () => {
      LandingPagePO.validateCreateAccount('Create an Account');
    });
    it('Should validate the message banner exists', () => {
      LandingPagePO.validateMessageBannerVisiable();
    });
    it('Should validate the message banner text', () => {
      LandingPagePO.validateMessageBannerText(
        'This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.'
      );
    });

    it('Should have the correct number of "panel" menu items', () => {
      LandingPagePO.validateMessagePanelCount(3);
    });

    it('Should have the correct text for Default welcome', () => {
      LandingPagePO.validateMessagePanelText('Default welcome msg!', 0);
      LandingPagePO.validateMessagePanelText('Sign In', 1);
      LandingPagePO.validateMessagePanelText('Create an Account', 2);
    });

    it("Should validate the the 'Search' input exists", () => {
      LandingPagePO.validateSearchInputExists;
    });

    it("Should validate the 'Shopping cart' exists", () => {
      LandingPagePO.validateUIElementExists('.showcart');
    });

    it('Should validate the 2nd Level Menu count is correct', () => {
      LandingPagePO.validate2ndLevelMenuItem(6);
      LandingPagePO.validate2ndLevelMenuItemExists("What's New", 0);
      LandingPagePO.validate2ndLevelMenuItemExists('Women', 1);
      LandingPagePO.validate2ndLevelMenuItemExists('Men', 2);
      LandingPagePO.validate2ndLevelMenuItemExists('Gear', 3);
      LandingPagePO.validate2ndLevelMenuItemExists('Training', 4);
      LandingPagePO.validate2ndLevelMenuItemExists('Sale', 5);
    });

    it('Should validate the default page image exists', () => {
      LandingPagePO.validateLandingPageImageDisplays();
    });
    
    it('Should validate that the default image contains a clickable button', () => {
      LandingPagePO.validateLandingPageImageButton();
    })
  });
});
