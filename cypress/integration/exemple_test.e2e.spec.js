describe("Basic test to check core features", () => {

    beforeEach(() => {
        cy.request('DELETE', 'http://localhost:3333/posts', {
            title: 'title teste',
            description: 'description teste'
        });
    });

   it("should be able to find element created", () => {
       cy.visit('/');
       cy.get('input[name=title]').type("title teste");
       cy.get('input[name=description]').type("description teste");
       cy.get('button').click();
       // cy.wait(6000);
       cy.get('div.post', {timeout:50000}).contains("title teste");

       cy.task('queryDb', 'SELECT NOW()').then(result => {
           expect(result.rows.length).to.be.equal(1);
       });
   });

});
