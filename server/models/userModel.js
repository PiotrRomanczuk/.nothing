const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	first_name: { type: String, default: null },
	last_name: { type: String, default: null },
	isAdmin: { type: Boolean, default: false },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	token: { type: String },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
