const { createPool } = require("mysql");

const pool = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "express_api",
    connectionLimit: 10
});

module.exports = pool;