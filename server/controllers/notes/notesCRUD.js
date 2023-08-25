const Note = require('../../models/noteModel');

// const findLastAndGenId = require('../../utils/findLastAndGenId');

// Create a new note
const createNote = async (req, res) => {
	console.log('Creating new note');
	try {
		const { title, description } = req.body;

		const lastNote = await Note.findOne().sort({ _id: 1 });

		let newNoteId;

		const checkLastId = () => {
			if (lastNote) {
				newNoteId = +lastNote._id + 1;
				checkLastId();
				return newNoteId;
			} else {
				newNoteId = 1;
			}
		};

		const newNote = new Note({
			_id: newNoteId,
			title,
			description,
		});

		const savedNote = await newNote.save();

		res.status(201).json(savedNote);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred.' });
	}
};

// Get all notes
const getAllNotes = async (req, res) => {
	console.log('Getting all notes');
	try {
		const notes = await Note.find();
		res.status(200).json(notes);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred.' });
	}
};

// Get a single note by ID
const getNoteById = async (req, res) => {
	console.log('Updating notes');
	const { noteId } = req.params;
	console.log(req.params);
	try {
		const note = await Note.findById(noteId);
		if (!note) {
			return res.status(404).json({ message: 'Note not found.' });
		}
		res.status(200).json(note);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred.' });
	}
};

// Update a note by ID
const updateNoteById = async (req, res) => {
	const { noteId } = req.params;
	const { title, description } = req.body;

	try {
		const updatedNote = await Note.findByIdAndUpdate(
			noteId,
			{ title, description },
			{ new: true }
		);

		if (!updatedNote) {
			return res.status(404).json({ message: 'Note not found.' });
		}

		res.status(200).json(updatedNote);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred.' });
	}
};

// Delete a note by ID
const deleteNoteById = async (req, res) => {
	const { noteId } = req.params;
	try {
		const deletedNote = await Note.findByIdAndDelete(noteId);

		if (!deletedNote) {
			return res.status(404).json({ message: 'Note not found.' });
		}

		return res
			.status(200)
			.json({ message: 'Note deleted successfully.', deletedNote });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred.' });
	}
};

const deleteAllNotes = async (req, res) => {
	try {
		const result = await Note.deleteMany({});

		if (result.deletedCount === 0) {
			return res.status(404).json({ message: 'No notes found to delete.' });
		}

		return res.status(200).json({ message: 'All notes deleted successfully.' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred.' });
	}
};

module.exports = {
	createNote,
	getAllNotes,
	getNoteById,
	updateNoteById,
	deleteNoteById,
	deleteAllNotes,
};
