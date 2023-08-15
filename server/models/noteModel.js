const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	timeAdded: {
		type: Date,
		required: true,
	},
	timeUpdated: Date,
});

const noteModel = mongoose.model('Note', noteSchema);

module.exports = noteModel;
