require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const expressWinston = require('express-winston');
const loggerConfig = require('./config/winstonLogger');

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const notesRouter = require('./routes/notesRoutes');

const {
	createNote,
	getAllNotes,
	getNoteById,
	updateNoteById,
	deleteNoteById,
} = require('./controllers/notesCRUD');

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));
app.use(expressWinston.logger(loggerConfig));

app.use('/notes', notesRouter);

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});

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
