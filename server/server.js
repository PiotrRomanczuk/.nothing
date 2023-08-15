require('dotenv').config();

const express = require('express');
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const client = require('./config/connectDB.js');

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});

const startServer = async () => {
	try {
		await client.connect();

		await client.db('admin').command({ ping: 1 });
		console.log(
			'Pinged your deployment. You successfully connected to MongoDB!'
		);
	} catch (err) {
		console.log(`Error: ${err}`);
		res.send(400);
	} finally {
		await client.close();
	}
};

startServer();

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
