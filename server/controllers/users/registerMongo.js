require('dotenv').config();
const path = require('path');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('main.db');

// console.log(db.all());

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

		encryptedPassword = await bcrypt.hash(password, 10);

		console.log(db);
		password = encryptedPassword;

		const CREATE_TABLE = `
			CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			first_name TEXT,
			last_name TEXT NOT NULL,
			email TEXT NOT NULL,
			password TEXT NOT NULL
  )`;

		db.serialize(() => {
			db.run(CREATE_TABLE);
		});
		// Insert the user into the database
		const insertQuery = `
				INSERT INTO users (email, password)
				VALUES (piotr@piotr.com, qwert)
			`;

		db.run(insertQuery, [email, password], (err) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ error: 'Unable to create user.' });
			}
			res.status(201).json({ message: 'User created successfully.' });
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = register;
