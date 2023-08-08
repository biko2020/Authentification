const connectMySql = require("mysql");
const getFile_DotEnv = require("dotenv");

// get path .env file
getFile_DotEnv.config({
    path: "./.env",
});

// connect to database
const DB_HOST = process.env.DATABASE_HOST;
const DB_USER = process.env.DATABASE_USER;
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB_NAME = process.env.DATABASE_NAME;
const DB_PORT = process.env.DATABASE_PORT;

var connection = connectMySql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    multipleStatements: true,
});

// establish the connection
connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as ID ' + connection.threadId);
});

module.exports = connection;