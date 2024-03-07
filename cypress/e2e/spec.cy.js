describe('template spec', () => {
  beforeEach(() => {
    cy.visit('html/index.html')
  })

  it('Unordered List', () => {
    cy.get('#sortAscending').click()
    cy.get('#listArea').verifySort('asc');

    cy.get('#sortDescending').click().wait(1000)
    cy.get('#listArea').verifySort('desc');
  })

  it('Table', () => {
    cy.get('#sortAscending').click()
    cy.get('#tableArea').verifySort('asc');

    cy.get('#sortDescending').click().wait(1000)
    cy.get('#tableArea').verifySort('desc');
  })

  it('DIV', () => {
    cy.get('#sortAscending').click()
    cy.get('#natural-list').verifyAdvanceSort('asc', 'natural', false);
  })

  it('Advanced Sorting', () => {
    cy.get('#sortAscending').click()
    cy.get('ul').verifyAdvanceSort('asc', 'alphabetical', false);
    cy.get('#number-list').verifyAdvanceSort('asc', 'numerical');
    cy.get('#natural-list').verifyAdvanceSort('asc', 'natural', false);
    cy.get('ul').verifyAdvanceSort('asc', 'alphabetical', true);
  })
})