
# Cypress Sorting Tests

This project contains Cypress test cases designed to validate sorting functionality across different HTML elements, including unordered lists (`<ul>`), tables (`<table>`), and div containers (`<div>`). The tests ensure that sorting actions (ascending and descending) performed on these elements result in the expected order.

## Project Setup

To get started with this project, ensure you have Cypress installed and configured in your project. If you haven't done so, refer to the [Cypress documentation](https://docs.cypress.io/guides/getting-started/installing-cypress) for installation instructions.

## Test Cases

The spec file contains several test cases designed to verify the sorting functionality:

- **Unordered List**: Tests sorting on a list of items contained within a `<ul>` element.
- **Table**: Tests sorting on rows within a `<table>` element.
- **DIV (Natural Sorting)**: Tests natural sorting within a `<div>` container, ideal for strings containing numerical values.
- **Advanced Sorting**: Tests various sorting criteria including alphabetical, numerical, and case sensitivity on different containers.

## Running Tests

To run these tests, navigate to your project directory and execute the following command:

```sh
npx cypress open
```

This will open the Cypress Test Runner. Select the spec file you wish to run, and observe the execution of the test cases.

## Test Implementation

Each test case clicks on a sort button (`#sortAscending` or `#sortDescending`) and then verifies the order of the elements within the targeted container (`#listArea`, `#tableArea`, `#natural-list`, etc.) using custom commands (`verifySort` and `verifyAdvanceSort`).

These custom commands are designed to abstract the complexity of sorting validation, allowing for reusable and easily readable test cases.

## Adding New Tests

To add new test cases, define them within the `describe` block using Cypress's `it` function. Utilize the existing custom commands for sorting verification or create new ones as needed to accommodate additional sorting functionalities or HTML structures.

## Support

For issues or questions regarding the test cases or the custom commands, consider creating an issue in this repository or referring to the Cypress documentation for further assistance.

## License

This project is open source and available under the MIT License.
