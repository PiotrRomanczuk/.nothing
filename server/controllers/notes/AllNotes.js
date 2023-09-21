const createNote = require('./createNote');
const getNoteById = require('./getNoteByID');
const getAllNotes = require('./getAllNotes');
const updateNoteById = require('./updateNoteByID');
const deleteNoteById = require('./deleteNoteByID');
const deleteAllNotes = require('./deleteAllNotes');

module.exports = {
	createNote,
	getNoteById,
	getAllNotes,
	updateNoteById,
	deleteNoteById,
	deleteAllNotes,
};
