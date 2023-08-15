require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
const client = require('./config/connectDB.js');

const Note = require('./models/noteModel');

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});

app.post('/notes', async (req, res) => {
	try {
		const { content } = req.body;

		if (!content) {
			return res.status(400).json({ message: 'Content is required.' });
		}

		const newNote = new Note({
			content,
		});

		const savedNote = await newNote.save();
		res.status(201).json(savedNote);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred.' });
	}
});

const startServer = async () => {
	try {
		client();
	} catch (err) {
		console.log(`Error: ${err}`);
		res.send(400);
	}
};

startServer();

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
