const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const openDatabase = require('../../database/openDatabase');

// Create a new SQLite database or open an existing one
const pathDB = path.join(__dirname, '../../database/main.db');

const db = new sqlite3.Database(pathDB);

// Create a table for notes if it doesn't exist
db.serialize(() => {
	db.run(
		`CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        idUser INTEGER, 
        title TEXT, 
        description TEXT)`
	);
});

// Create a new note
const createNote = (req, res) => {
	console.log('Creating new note');
	const { idUser, title, description } = req.body;

	// Get the last inserted note ID
	db.get('SELECT MAX(id) AS maxId FROM notes', (err, row) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ message: 'An error occurred.' });
		}

		const newNoteId = row.maxId ? row.maxId + 1 : 1;

		// Insert the new note with idUser
		db.run(
			'INSERT INTO notes (id, idUser, title, description) VALUES (?, ?, ?, ?)',
			[newNoteId, idUser, title, description],
			(err) => {
				if (err) {
					console.error(err);
					return res.status(500).json({ message: 'An error occurred.' });
				}

				// Return the newly created note
				res.status(201).json({ id: newNoteId, idUser, title, description });
			}
		);
	});
};

module.exports = createNote;
