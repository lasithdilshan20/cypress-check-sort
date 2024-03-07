// Load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Custom command to verify sorting of elements.
         * @param order Specifies the order of sorting ('asc' or 'desc')
         * @example cy.get('.list-items').verifySort('asc')
         */
        verifySort(order: 'asc' | 'desc'): Chainable<Subject>
        /**
         * Custom command to verify advanced sorting of elements.
         * @param order Specifies the order of sorting ('asc' or 'desc')
         * @param type Specifies the type of sorting ('alphabetical', 'numerical', or 'natural')
         * @param caseSensitive Specifies if sorting should be case sensitive (default: false)
         * @example cy.get('.list-items').verifyAdvanceSort('asc', 'alphabetical', false)
         */
        verifyAdvanceSort(order: 'asc' | 'desc', type: 'alphabetical' | 'numerical' | 'natural', caseSensitive?: boolean): Chainable<Subject>
    }
}
