const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('notes.db');

// Create a new note
const getAllNotes = (req, res) => {
	console.log('Getting all notes');

	// Retrieve all notes from the database
	db.all('SELECT * FROM notes', (err, rows) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ message: 'An error occurred.' });
		}

		// Return the list of notes
		res.status(200).json(rows);
	});
};

module.exports = getAllNotes;
