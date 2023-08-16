const express = require('express');
const router = express.Router();

const {
	createNote,
	getAllNotes,
	getNoteById,
	updateNoteById,
	deleteNoteById,
} = require('../controllers/notesCRUD');

// Define routes for notes
router.get('/notes', getAllNotes);
router.post('/notes', createNote);
router.get('/notes/:noteId', getNoteById);
router.put('/notes/:noteId', updateNoteById);
router.delete('/notes/:noteId', deleteNoteById);

module.exports = router;
