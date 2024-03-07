const createVerifyAdvanceSortCommand = (name) => {
    Cypress.Commands.add(name, { prevSubject: 'element' }, ($parents, order = 'asc', type = 'alphabetical', caseSensitive = false) => {
        cy.log(`**${name}**`);
        $parents.each((index, parent) => {
            const items = Cypress.$(parent).children().map((index, item) => {
                let text = Cypress.$(item).text().trim();
                return caseSensitive ? text : text.toLowerCase();
            }).get();
            const sortFunction = getSortFunction(type, order);
            const sortedItems = [...items].sort(sortFunction);
            const finalSorted = order === 'asc' || type === 'natural' ? sortedItems : sortedItems.reverse();
            let isCorrectOrder = items.every((item, i) => item === finalSorted[i]);

            expect(isCorrectOrder, `Items in parent at index ${index} are in ${order} ${type} order.`).to.be.true;
        });
    });

    function getSortFunction(type, order) {
        switch (type) {
            case 'alphabetical':
                return (a, b) => a.localeCompare(b);
            case 'numerical':
                return (a, b) => parseFloat(a) - parseFloat(b);
            case 'natural':
                const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
                return (a, b) => collator.compare(a, b);
            default:
                return (a, b) => a.localeCompare(b);
        }
    }
};

module.exports = { createVerifyAdvanceSortCommand };
