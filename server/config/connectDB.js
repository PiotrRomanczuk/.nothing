require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
	'mongodb+srv://admin:admin@cluster0.pidvx7b.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

module.exports = client;
