const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('notes.db');

// Create a new note
const getNoteById = (req, res) => {
	console.log('Getting a single note by ID');
	const { noteId } = req.params;

	// Retrieve the note with the specified ID from the database
	db.get('SELECT * FROM notes WHERE id = ?', [noteId], (err, row) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ message: 'An error occurred.' });
		}

		if (!row) {
			return res.status(404).json({ message: 'Note not found.' });
		}

		// Return the single note
		res.status(200).json(row);
	});
};

module.exports = getNoteById;
