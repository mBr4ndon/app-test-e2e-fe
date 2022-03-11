const axios = require('axios');
const { Client } = require('pg');

describe('My Login application', () => {

    beforeEach(async () => {
        await axios.delete('http://localhost:3333/posts', {
            title: 'Title test',
            description: 'Description test'
        });
    });

    it('should visit a page', async () => {
        // visit page
        await browser.url('/');

        // find elements
        const titleInput = await $("input[name=title]");
        const descriptionTitle = await $("input[name=description]");
        const button = await $("button");

        // fill form and submit
        await titleInput.setValue("Title test");
        await descriptionTitle.setValue("Description test");
        await button.click();

        // check if h2 appeared
        const h2WithTitleInfo = await $(".post").$("h2");
        await h2WithTitleInfo.waitForDisplayed();
        await expect(h2WithTitleInfo).toHaveText('Title test');

        // check database persistence
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'test-postgres-demo',
            password: 'mysecretpassword',
            port: 5432,
        });

        await client.connect();
        const res = await client.query('SELECT NOW()');
        expect(res.rows.length).toEqual(1);
    });
});


