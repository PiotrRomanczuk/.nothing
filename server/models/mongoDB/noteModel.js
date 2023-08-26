const mongoose = require('mongoose');
const shortid = require('shortid');

const noteSchema = new mongoose.Schema({
	_id: {
		type: String,
		default: shortid.generate,
	},
	title: { type: String, required: true },
	description: { type: String, required: true },
	timeAdded: Date,
	timeUpdated: Date,
});

const noteModel = mongoose.model('Note', noteSchema);

module.exports = noteModel;
