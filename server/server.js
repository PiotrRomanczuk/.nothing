require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const expressWinston = require('express-winston');
const winstonLoggerConfig = require('./config/winstonLoggerConfig');

const auth = require('./middleware/auth');

const notesRouter = require('./routes/notesRoutes');
const authRouter = require('./routes/authRoutes');

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));
app.use(expressWinston.logger(winstonLoggerConfig));
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send(`Error: ${err.stack}`);
});

app.use('/notes/', notesRouter);
app.use('/user/', authRouter);

app.post('/welcome', auth, (req, res) => {
	res.status(200).send('Welcome 🙌 ');
});

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});
// TODO SQLite database implementation for users and tasks

const startServer = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`listening on port ${PORT}`);
		});
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

startServer();

module.exports = { app, startServer };
