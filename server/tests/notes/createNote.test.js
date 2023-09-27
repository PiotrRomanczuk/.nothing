const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { app } = require('../../server'); // Import your Express app or module where createNote is defined

chai.use(chaiHttp);

// Define the path to your testing database
const testDBPath = path.join(__dirname, '../../database/main.db');

describe('createNote', () => {
	let db;

	before((done) => {
		// Create a new SQLite database for testing
		db = new sqlite3.Database(testDBPath, () => {
			// Run your database migration or setup scripts here
			// For example, create the 'notes' table like in your main code

			db.run(
				`CREATE TABLE IF NOT EXISTS notes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          idUser INTEGER,
          title TEXT,
          description TEXT
        )`,
				() => {
					done();
				}
			);
		});
	});

	after((done) => {
		// Close the testing database connection after tests are done
		db.close(() => {
			done();
		});
	});

	// Write a test case for createNote
	it('should create a new note', (done) => {
		const newNote = {
			idUser: 1, // Change as needed
			title: 'Test Note',
			description: 'This is a test note.',
		};

		chai
			.request(app) // Replace with your Express app
			.post('/notes') // Replace with your createNote route
			.send(newNote)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(201);
				expect(res.body).to.have.property('id');
				expect(res.body.idUser).to.equal(newNote.idUser);
				expect(res.body.title).to.equal(newNote.title);
				expect(res.body.description).to.equal(newNote.description);

				done();
			});
	}).timeout(5000);
});
