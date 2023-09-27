const sqlite3 = require('sqlite3').verbose();

const path = require('path');
const pathDB = path.join(__dirname, '../../database/main.db');

let db = new sqlite3.Database(pathDB, sqlite3.OPEN_READWRITE);

let isClosed = false;
let sigintHandled = false;

const closeDatabase = (exitCode = 0) => {
	if (isClosed) {
		return;
	}

	isClosed = true;

	// Handle uncaught exceptions
	process.on('uncaughtException', (err) => {
		console.error(err);

		console.log('\nDatabase is closed on uncaught exception');

		db.close(() => process.exit(1)); // Exit with an error code
	});

	// Handle Ctrl+C gracefully
	process.on('SIGINT', () => {
		if (!sigintHandled) {
			console.log('\nDatabase is closed on SIGINT');

			db.close(() => {
				sigintHandled = true;
				process.exit(0); // Exit without an error code
			});
		}
	});

	// Handle application exit
	process.on('exit', () => {
		if (!sigintHandled) {
			console.log('\nDatabase is closed');

			db.close(() => process.exit(exitCode));
		}
	});
};

module.exports = closeDatabase;
