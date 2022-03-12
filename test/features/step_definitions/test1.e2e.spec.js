const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const puppeteer = require('puppeteer');
const { Client } = require('pg');

Given('I want to go to {string}', async (url) => {
    this.browser = await puppeteer.launch({});
    this.page = await this.browser.newPage();
    await this.page.goto(url);
});

When('I fill the title input with {string}', async (title) => {
    await this.page.type('input[name=title]', title);
});

Then('the description input with {string}', async (description) => {
    await this.page.type('input[name=description]', description);
});

Then('there should be a div with the h2 with {string}', async (h2Text) => {
    await this.page.click(".btn-form");
    setTimeout(async () => {
        await this.page.waitForSelector(".list-posts", { visible: true });
        const posts = await this.page.$$eval('div.post h2', elements => elements.map(item=>item.textContent));
        const hasTitle = posts.includes(h2Text);
        assert.equal(hasTitle, true);
        await this.browser.close();
    }, 3000);
});

Then('I want to check on the database', async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'test-postgres-demo',
        password: 'mysecretpassword',
        port: 5432,
    });

    await client.connect();
    const res = await client.query('SELECT NOW()');
    assert.equal(res.rows.length,1);
    await client.end();
});
