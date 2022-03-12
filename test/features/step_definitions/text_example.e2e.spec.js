const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
require('chromedriver');

Given('I want to go to {string}', async (url) => {
    this.driver = await new Builder().forBrowser('chrome').build();
    await this.driver.get(url);
});

When('I fill the title input with {string}', async (titleText) => {
    await this.driver.findElement(By.css('input[name=title]')).sendKeys(titleText);
});

Then('the description input with {string}', async (descriptionText) => {
    await this.driver.findElement(By.css('input[name=description]')).sendKeys(descriptionText);
    await this.driver.findElement(By.tagName('button')).click();
});

Then('there should be a div with the h2 with {string}', {timeout: 30000}, async (finalText) => {
    const elementPostWrapper = await this.driver.findElement(By.css('.list-posts'));
    await this.driver.wait(until.elementIsVisible(elementPostWrapper), 10000);
    const postTitle = await this.driver.findElement(By.css('.post h2')).getText();
    assert.equal(postTitle, finalText)
    await this.driver.quit();
});
