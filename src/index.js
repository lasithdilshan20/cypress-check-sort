const { createVerifySortCommand } = require('./verify-sort')
const { createVerifyAdvanceSortCommand } = require('./verify-advance-sort')

const registerCommand = (name = 'verifySort') => {
    const storeValue = createVerifySortCommand(name);
    Cypress.Commands.add(name, storeValue);
}
const registerAdvanceSortCommand = (name = 'verifyAdvanceSort') => {
    const storeValue = createVerifyAdvanceSortCommand(name);
    Cypress.Commands.add(name, storeValue);
}



module.exports = { registerAdvanceSortCommand, registerCommand}