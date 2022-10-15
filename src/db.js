const pool = new Pool({
    user: 'root',
    host: 'db',
    password: 'root',
    database: 'library',
    port: "5432"
});

module.exports = pool