require('dotenv').config(); // Make sure this line is at the top of your file

const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const express = require('express');
const app = express();
const PORT = 8080;

const mongoose = require('mongoose');
const connectionDB = require('./database/connectionDB');

// Access environment variable
const uri = process.env.MONGODB_URI;

const Note = require('./models/noteModel');
const createNote = require('./controllers/createNote');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});

app.post('/notes', createNote);

const startServer = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Successfully connected to MongoDB');

		app.listen(PORT, () => {
			console.log(`listening on port ${PORT}`);
		});
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

startServer();
