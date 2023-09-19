const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('notes.db');

// Create a new note
const deleteAllNotes = (req, res) => {
	// Delete all notes in the database
	db.run('DELETE FROM notes', (err) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ message: 'An error occurred.' });
		}

		// Check if any notes were deleted
		db.get('SELECT changes() AS deletedCount', (err, row) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: 'An error occurred.' });
			}

			if (row.deletedCount === 0) {
				return res.status(404).json({ message: 'No notes found to delete.' });
			}

			// Return a success message
			res.status(200).json({ message: 'All notes deleted successfully.' });
		});
	});
};

module.exports = deleteAllNotes;
