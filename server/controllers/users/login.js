require('dotenv').config();

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!(email && password)) {
			return res
				.status(400)
				.send({ error: 'All inputs are required - email && password' });
		}

		const pathDB = path.join(__dirname, '../../database/main.db');

		// const db = openDatabase(pathDB, `Opening database on logging in`);
		let db = new sqlite3.Database(pathDB, sqlite3.OPEN_READWRITE, (err) => {
			if (err) {
				console.error(err.message);
				return; // This will exit the function when an error occurs
			} else {
				console.log('Starting login process on database');
				// Continue with database operations here
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
				return res.status(400).json({ error: 'Invalid password.' });
			}

			// Create a JWT token

			const token = jwt.sign(
				{ userId: row.id, email: email },
				process.env.JWT_SECRET,
				{
					expiresIn: '1h', // Set the token expiration time as needed
				}
			);

			// Successful login
			res.status(200).json({ message: 'Success', token });
			console.log('Login successful');
		});
	} catch (err) {
		console.error(err);
	}
};

module.exports = login;
