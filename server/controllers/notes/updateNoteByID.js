const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('notes.db');

// Create a new note
const updateNoteById = (req, res) => {
	const { noteId } = req.params;
	const { title, description } = req.body;

	// Check if the note exists before updating it
	db.get('SELECT * FROM notes WHERE id = ?', [noteId], (err, row) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ message: 'An error occurred.' });
		}

		if (!row) {
			return res.status(404).json({ message: 'Note not found.' });
		}

		// Update the note with the specified ID
		db.run(
			'UPDATE notes SET title = ?, description = ? WHERE id = ?',
			[title, description, noteId],
			(err) => {
				if (err) {
					console.error(err);
					return res.status(500).json({ message: 'An error occurred.' });
				}

				// Fetch the updated note from the database
				db.get(
					'SELECT * FROM notes WHERE id = ?',
					[noteId],
					(err, updatedNote) => {
						if (err) {
							console.error(err);
							return res.status(500).json({ message: 'An error occurred.' });
						}

						// Return the updated note
						res.status(200).json(updatedNote);
					}
				);
			}
		);
	});
};

module.exports = updateNoteById;
