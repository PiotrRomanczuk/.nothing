const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const deleteUser = async (req, res) => {
	try {
		const userId = req.params.userId;

		const pathDB = path.join(__dirname, '../../database/main.db');
		const db = new sqlite3.Database(pathDB, sqlite3.OPEN_READWRITE, (err) => {
			if (err) {
				console.error(err.message);
				return res.status(500).json({ error: 'Database error' });
			}
		});

		db.serialize(() => {
			const deleteUserQuery = 'DELETE FROM users WHERE id = ?';

			db.run(deleteUserQuery, [userId], (err) => {
				if (err) {
					console.error(`SQL delete error: ${err.message}`);
					return res.status(500).json({ error: 'Unable to delete user.' });
				}
				res.status(204).end(); // No content response indicates success
			});
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

module.exports = deleteUser;
