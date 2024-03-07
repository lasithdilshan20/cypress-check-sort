Cypress.Commands.add("verifySort", { prevSubject: 'element' }, ($parents, order = 'asc') => {
    cy.log('**verifySort**')
    $parents.each((index, parent) => {
        let items = [];
        if (parent.tagName === 'TABLE' || parent.tagName === 'TBODY') {
            const rows = Array.from(parent.querySelectorAll('tr'));
            const dataRows = rows[0] && rows[0].querySelector('th') ? rows.slice(1) : rows;
            items = dataRows.map(row => row.querySelector('td').textContent.trim());
        } else {
            items = Cypress.$(parent).children().map((index, child) => Cypress.$(child).text().trim()).get();
        }
        let isCorrectOrder = items.every((item, i, arr) => {
            return i === 0 || (order === 'asc' ? arr[i - 1].localeCompare(item) <= 0 : arr[i - 1].localeCompare(item) >= 0);
        });
        expect(isCorrectOrder, `Items in parent at index ${index} are in ${order} order.`).to.be.true;
    });
});

Cypress.Commands.add("verifyAdvanceSort", { prevSubject: 'element' }, ($parents, order = 'asc', type = 'alphabetical', caseSensitive = false) => {
    cy.log('**verifyAdvanceSort**')
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
