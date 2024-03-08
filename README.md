# cypress-check-sort [![ci status][ci image]][ci url] [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-13.6.0-brightgreen)

> This project contains Cypress test cases designed to validate sorting functionality across different HTML elements, including unordered lists (`<ul>`), tables (`<table>`), and div containers (`<div>`). The tests ensure that sorting actions (ascending and descending) performed on these elements result in the expected order.

## install

```
npm i -D cypress-check-sort
# or
yarn add -D cypress-check-sort
```

## use

### Simple

Include from your Cypress support file or individual spec (cypress > support > e2e.js)

```js
import 'cypress-check-sort/commands'
```

```js
cy.get(parent_element).verifySort(order);
cy.get(parent_element).verifyAdvanceSort(order, type, caseSensitive);
```
Example:
```js
  it('Check sorting', () => {
    cy.get('#sortAscending').click()
    cy.get('#natural-list').verifyAdvanceSort('asc', 'natural', false)

    cy.get('#sortDescending').click()
    cy.get('#listArea').verifySort('desc')
})
```

[ci image]: https://github.com/lasithdilshan20/cypress-check-sort/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/lasithdilshan20/cypress-check-sort/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

## Small print

Author: Lasitha Wijenayake &lt;lasithdilshan20@gmail.com&gt; &copy; 2024

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email
[open issue](https://github.com/lasithdilshan20/cypress-check-sort/issues) on Github

## MIT License

Copyright (c) 2024 Lasitha Wijenayake &lt;lasithdislahan20@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
