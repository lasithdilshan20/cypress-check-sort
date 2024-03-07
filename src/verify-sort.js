const createVerifySortCommand = (name) => {
    Cypress.Commands.add(name, { prevSubject: 'element' }, ($parents, order = 'asc') => {
        cy.log(`**${name}**`)
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
}

module.exports = { createVerifySortCommand };
