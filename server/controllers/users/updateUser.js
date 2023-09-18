const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');
const {
	validatePassword,
	validateEmail,
} = require('../../utils/email&passValidate');

const updateUser = async (req, res) => {
	try {
		const userId = req.params.userId;
		const { email, password } = req.body;

		if (!(email || password)) {
			return res
				.status(400)
				.json({ error: 'At least one field (email or password) is required.' });
		}

		if (email && !validateEmail(email)) {
			return res.status(400).json({ error: 'Invalid email address' });
		}

		if (password && !validatePassword(password)) {
			return res.status(400).json({ error: 'Invalid password format' });
		}

		const pathDB = path.join(__dirname, '../../database/main.db');
		const db = new sqlite3.Database(pathDB, sqlite3.OPEN_READWRITE, (err) => {
			if (err) {
				console.error(err.message);
				return res.status(500).json({ error: 'Database error' });
			}
		});

		db.serialize(() => {
			const updateUserQuery =
				'UPDATE users SET email = ?, password = ? WHERE id = ?';
			const valuesToUpdate = [];

			if (email) {
				valuesToUpdate.push(email);
			} else {
				valuesToUpdate.push(null);
			}

			if (password) {
				const salt = 10;
				const encryptedPassword = bcrypt.hashSync(password, salt);
				valuesToUpdate.push(encryptedPassword);
			} else {
				valuesToUpdate.push(null);
			}

			valuesToUpdate.push(userId);

			db.run(updateUserQuery, valuesToUpdate, (err) => {
				if (err) {
					console.error(`SQL update error: ${err.message}`);
					return res.status(500).json({ error: 'Unable to update user.' });
				}
				res.status(200).json({ message: 'User profile updated successfully.' });
			});
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

module.exports = updateUser;
