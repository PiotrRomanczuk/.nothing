require('dotenv').config();

const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/main.db');
const closeDatabase = require('./database/closeDatabase');

const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');

const expressWinston = require('express-winston');
const winstonLoggerConfig = require('./config/winstonLoggerConfig');

const authToken = require('./middleware/authToken');

const notesRouter = require('./routes/notesRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');

const PORT = 8080;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));
app.use(expressWinston.logger(winstonLoggerConfig));

app.use('/notes/', notesRouter);
app.use('/user/', userRouter);
app.use('/user/', authRouter);

app.get('/welcome', (req, res) => {
	res.status(200).send('Welcome 🙌 ');
});

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});

app.all('*', (req, res) => {
	res.send({ error: 'No routes matched' });
	res.end();
});

// TODO SQLite database implementation for users and tasks

const startServer = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`listening on port ${PORT}`);
			closeDatabase();
		});
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

const closeServer = () => {
	if (app) {
		app.close();
	}
};

startServer();

module.exports = { app, startServer, closeServer, PORT };
