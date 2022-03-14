import { When, Then, And, Given } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', () => {
    cy.visit('/');
});

When('I fill the title input with {string}', (title) => {
    cy.get('input[name=title]').type(title);
});

And("I fill the description input with {string}", (description) => {
    cy.get('input[name=description]').type(description);
});

And("I click on the submit button", () => {
    cy.get('button').click();
});

Then('I should have a post with the title {string}', (title) => {
    cy.get('.post h2', { timeout: 50000}).contains(title);
});
