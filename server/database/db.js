const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",           // PostgreSQL username
    password: "your_password",  // use your password here
    host: "localhost",          // this runs in the local host of your computer
    port: 5432,                 // default port for PostgreSQL
    database: "bridgeback"      // "bridgeback" is the name of the database we created"
})

module.exports = pool; //