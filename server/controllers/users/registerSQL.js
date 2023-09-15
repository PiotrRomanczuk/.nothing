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

const register = async (req, res) => {
	try {
		let { email, password } = req.body;

		if (!(email && password)) {
			return res
				.status(400)
				.send('All inputs are required - email && password');
		}
		if (!validateEmail(email)) {
			return res.status(400).send('Invalid email address');
		}
		if (!validatePassword(password)) {
			return res.status(400).send('Invalid password format');
		}

		const salt = 10;
		encryptedPassword = await bcrypt.hash(password, salt);

		password = encryptedPassword;

		const CREATE_TABLE = `
					CREATE TABLE IF NOT EXISTS users (
						id INTEGER PRIMARY KEY AUTOINCREMENT,
						first_name TEXT,
						email TEXT NOT NULL,
						password TEXT NOT NULL
						)`;

		const pathDB = path.join(__dirname, '../../testDB1.db');
		console.log(pathDB);
		let db = new sqlite3.Database(pathDB, sqlite3.OPEN_READWRITE, (err) => {
			if (err) {
				console.error(err.message);
			} else {
				console.log('Connected to the database.');
			}
		});

		db.serialize(() => {
			db.run(CREATE_TABLE, (err) => {
				if (err) {
					console.error(err.message);
				} else {
					const insertQuery = `
			INSERT INTO users (email, password)
			VALUES (?, ?)
		`;
					console.log({ email, password });

					db.run(insertQuery, [email, password], (err) => {
						if (err) {
							console.error(`SQL insert error: ${err.message}`);
							// console.log('Error happend here');
							return res.status(500).json({ error: 'Unable to create user.' });
						}
						res.status(201).json({ message: 'User created successfully.' });
					});
				}
			});
		});

		// db.close();
	} catch (err) {
		console.error(err);
	}
};

module.exports = register;
