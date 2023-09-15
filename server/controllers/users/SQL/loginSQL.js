require('dotenv').config();
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!(email && password)) {
			return res
				.status(400)
				.send('All inputs are required - email && password');
		}

		const pathDB = path.join(__dirname, '../../../testDB1.db');
		console.log(pathDB);

		const db = new sqlite3.Database(pathDB, sqlite3.OPEN_READWRITE, (err) => {
			if (err) {
				console.error(err.message);
			} else {
				console.log('Connected to the database.');
			}
		});

		const checkUserQuery = 'SELECT id, password FROM users WHERE email = ?';

		db.get(checkUserQuery, [email], async (err, row) => {
			if (err) {
				console.error(`SQL select error: ${err.message}`);
				return res.status(500).json({ error: 'Unable to login.' });
			}

			if (!row) {
				// User does not exist
				console.error(`User does not exist.`);
				return res.status(400).json({ error: 'User does not exist.' });
			}

			const hashedPassword = row.password;
			const isPasswordValid = await bcrypt.compare(password, hashedPassword);

			if (!isPasswordValid) {
				// Invalid password
				console.error('Invalid password');
				return res.status(400).json({ message: 'Invalid password.' });
			}

			// Successful login
			console.log('Login successful');
			res.status(200).json({ message: 'Success' });
		});
	} catch (err) {
		console.error(err);
	}
};

module.exports = login;
