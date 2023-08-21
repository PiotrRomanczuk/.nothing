const express = require('express');
const router = express.Router();

const {
	createNote,
	getAllNotes,
	getNoteById,
	updateNoteById,
	deleteNoteById,
	deleteAllNotes,
} = require('../controllers/notesCRUD');

// Define routes for notes
router.post('/', createNote);
router.get('/', getAllNotes);
router.get('/:noteId/', getNoteById);
router.put('/:noteId/', updateNoteById);
router.delete('/:noteId/', deleteNoteById);
router.delete('/', deleteAllNotes);

module.exports = router;
