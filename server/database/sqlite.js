const sqlite3 = require('sqlite3').verbose();

const startDB = (database) => {
	const db = new sqlite3.Database(database);

	const sql_query_create_table = `CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
    first_name VARCHAR(255) NOT NULL, 
    last_name VAARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255))`;

	// db.

	// new sqlite3.Database(database, sqlite3.OPEN_READWRITE, (err) => {
	// 	if (err) return console.error(err.message);
	// 	else return console.log('Create Table successfully');
	// });
};

module.exports = startDB;
