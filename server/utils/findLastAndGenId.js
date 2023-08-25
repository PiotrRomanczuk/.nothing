const Note = require('../models/noteModel');

async function findLastAndGenId() {
	try {
		const lastNote = await Note.findOne().sort({ _id: -1 });

		if (lastNote) {
			const nextNoteID = lastNote._id + 1;

			return nextNoteID;
		} else {
			return 1;
		}
	} catch (error) {
		console.error('Error finding last note:', error);
	}
}

module.exports = findLastAndGenId;
