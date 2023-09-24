class LandingPagePO {
  validateCreateAccount(expected) {
    cy
      .get('.panel > .header > :nth-child(3) > a')
      .should('contain.text', expected);
  }
  validateMessageBannerVisiable() {
    cy.get('.message').should('exist');
  }
  validateMessageBannerText(expected) {
    cy.get('.message').should('contain.text', expected);
  }

  validateMessagePanelCount(expected) {
    cy.get('.header .links li').should('have.length', expected);
  }
  validateMessagePanelText(expected, index) {
    cy.get('.header .links li').eq(index).should('contain.text', expected);
  }
  validateSearchInputExists() {
    cy.get('#search').should('exist').and('be.enabled');
  }

  validateUIElementExists(selector) {
    cy.get(`${selector}`).should('exist');
  }

  validate2ndLevelMenuItem(expected) {
    cy.get('#ui-id-2>li').should('have.length', expected);
  }

  validate2ndLevelMenuItemExists(expected, index) {
    cy.get('#ui-id-2 li.level0').eq(index).should('contain.text', expected);
  }

  validateLandingPageImageDisplays() {
    cy.get('.home-main > img').should('exist').and('be.visible');
  }

  validateLandingPageImageButton() {
    cy.get('.home-main > .content > .action').should('exist');
  }

  searchInputText(text) {
    cy.get('#search').clear().type(`${text}{enter}`);
  }

}

export default new LandingPagePO();
