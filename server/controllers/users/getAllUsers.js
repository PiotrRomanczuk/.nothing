require('dotenv').config();
const path = require('path');

const sqlite3 = require('sqlite3').verbose();

const getAllUsers = async (req, res) => {
	try {
		// Connect to the SQLite database
		const pathDB = path.join(__dirname, '../../database/main.db');
		const db = new sqlite3.Database(pathDB);

		// Query the database to retrieve all users
		const getAllUsersQuery = 'SELECT id, email FROM users';

		db.all(getAllUsersQuery, [], (err, rows) => {
			if (err) {
				console.error(`SQL select error: ${err.message}`);
				return res.status(500).json({ error: 'Unable to retrieve users.' });
			}

			// Send the list of users as a response
			res.status(200).json(rows);
		});

		// Close the database connection
		db.close();
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

module.exports = getAllUsers;
