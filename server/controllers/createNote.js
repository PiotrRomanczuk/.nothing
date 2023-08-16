const Note = require('../models/noteModel');

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

module.exports = createNote;
