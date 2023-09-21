const sqlite3 = require('sqlite3');

const openDatabase = (pathDB, log) => {
	new sqlite3.Database(pathDB, sqlite3.OPEN_READWRITE, (err) => {
		if (err) {
			console.error(err.message);
		} else {
			console.log(log);
		}
	});
};

module.exports = openDatabase;
