class SearchPagePO {
  log() {
    cy.log('Hav bar');
  }

  validateSearchResultInvalidPageExist() {
    cy.get('.column > .message').should('exist');
  }

  validateSearchInputInvalidMessage(expected) {
    cy.get('.column > .message > div').should('contain.text', expected);
  }

  validateSearchResultsByFilter(expected) {
    cy
      .get('#narrow-by-list > div > div.filter-options-content > ol > li')
      .should('contain.text', expected);
  }

  validateSearchBreadCrumb(expected) {
    cy
      .get('div.page-wrapper > div.breadcrumbs > ul > li:last-of-type')
      .should('contain.text', expected);
  }

  validateSearchResultCardDisplayCount(expected) {
    cy.get('.product-image-photo').should('have.length', expected);
  }

  selectDisplayResults(expected){
    cy.get(':nth-child(4) > .field > .control > #limiter').select(expected)
  }
}

export default new SearchPagePO();
