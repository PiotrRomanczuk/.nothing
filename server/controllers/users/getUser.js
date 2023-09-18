require('dotenv').config();
const path = require('path');

// const pathDB =
// '/home/brunodev/Documents/vscode/Git/backend/src/database/database.db';

const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('../../database/main.db');

const bcrypt = require('bcryptjs');

const {
	validatePassword,
	validateEmail,
} = require('../../utils/email&passValidate');

const getUser = async (req, res) => {
	try {
		// Assuming you have the authenticated user's ID available in req.user
		const userId = req.body.id;

		// Connect to the SQLite database
		const pathDB = path.join(__dirname, '../../../testDB1.db');
		const db = new sqlite3.Database(pathDB);

		// Query the database to retrieve the user's profile based on their ID
		const getUserQuery = 'SELECT id, email FROM users WHERE id = ?';

		db.get(getUserQuery, [userId], (err, row) => {
			if (err) {
				console.error(`SQL select error: ${err.message}`);
				return res
					.status(500)
					.json({ error: 'Unable to retrieve user profile.' });
			}

			if (!row) {
				// User not found
				return res.status(404).json({ message: 'User not found' });
			}

			// Send the user's profile as a response
			res.status(200).json(row);
		});

		// Close the database connection
		db.close();
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

module.exports = getUser;
