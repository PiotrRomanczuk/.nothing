const Note = require('../models/noteModel');

// Create a new note
const createNote = async (req, res) => {
	try {
		const { title, description } = req.body;

		const newNote = new Note({
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
	const { noteId } = req.params;
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

		res.status(204).json();
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
};
