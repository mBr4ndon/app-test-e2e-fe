const { Client } = require('pg');

async function queryTestDb(query) {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'test-postgres-demo',
        password: 'mysecretpassword',
        port: 5432,
    });
    await client.connect();

    const res = await client.query(query);
    await client.end();
    return res;
}

module.exports = (on, config) => {
    on('task', { queryDb: query => { return queryTestDb(query) }, })
}
