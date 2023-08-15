require('dotenv').config();
const mongoose = require('mongoose');

const uri =
	'mongodb+srv://admin:admin@cluster0.pidvx7b.mongodb.net/?retryWrites=true&w=majority';

const connection = async () => {
	await mongoose.connect(uri);
};

const client = async () => {
	try {
		if (!connection) {
			throw new Error('Connection failed');
		} else {
			console.log('Successfully connected to Mongoose');
		}
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

module.exports = client;
