const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('notes.db');

// Create a new note
const deleteNoteById = (req, res) => {
	const { noteId } = req.params;

	// Check if the note exists before deleting it
	db.get('SELECT * FROM notes WHERE id = ?', [noteId], (err, row) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ message: 'An error occurred.' });
		}

		if (!row) {
			return res.status(404).json({ message: 'Note not found.' });
		}

		// Delete the note with the specified ID
		db.run('DELETE FROM notes WHERE id = ?', [noteId], (err) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: 'An error occurred.' });
			}

			// Return a success message and the deleted note
			res
				.status(200)
				.json({ message: 'Note deleted successfully.', deletedNote: row });
		});
	});
};

module.exports = deleteNoteById;
