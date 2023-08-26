require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const MongoDB_Connection = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
};

module.exports = MongoDB_Connection;
