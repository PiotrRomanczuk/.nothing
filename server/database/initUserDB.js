const sqlite3 = require('sqlite3').verbose();

const initUserDB = async (databasePath) => {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database(databasePath, (err) => {
			if (err) {
				reject(err);
			} else {
				db.run(
					`CREATE TABLE IF NOT EXISTS users (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				first_name TEXT,
				email TEXT NOT NULL,
				password TEXT NOT NULL,
				isAdmin BOOLEAN NOT NULL DEFAULT 0
                );
            `,
					(createTableErr) => {
						if (createTableErr) {
							reject(`CreateTableErr: ${createTableErr}`);
						} else {
							resolve(db);
						}
					}
				);
			}
		});
	});
};

module.exports = { initUserDB };
