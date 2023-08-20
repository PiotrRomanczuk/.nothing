require('dotenv').config(); // Make sure this line is at the top of your file

const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const {
	createNote,
	getAllNotes,
	getNoteById,
	updateNoteById,
	deleteNoteById,
} = require('./controllers/notesCRUD');

const express = require('express');
const app = express();
const PORT = 8080;

const mongoose = require('mongoose');

// Access environment variable
const uri = process.env.MONGODB_URI;

const Note = require('./models/noteModel');
const noteRoutes = require('./routes/noteRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
// app.use(cors(corsOptions));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});

// app.post('/notes', noteRoutes);

app.get('/notes', getAllNotes);
app.post('/notes', createNote);
app.get('/notes/:noteId', getNoteById);
app.put('/notes/:noteId', updateNoteById);
app.delete('/notes/:noteId', deleteNoteById);

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

module.exports = { app, startServer };
