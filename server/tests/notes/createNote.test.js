// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const sqlite3 = require('sqlite3').verbose();
// const { app } = require('../../server'); // Replace with the actual path to your Express app
// const expect = chai.expect;

// chai.use(chaiHttp);

// describe('createNote', () => {
// 	let db;

// 	// Before running tests, open the database connection
// 	before((done) => {
// 		db = new sqlite3.Database(':memory:');
// 		// Replace ':memory:' with the actual database file path if necessary

// 		// Create the notes table
// 		db.run(
// 			`CREATE TABLE IF NOT EXISTS notes (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         idUser INTEGER,
//         title TEXT,
//         description TEXT)`
// 		);

// 		done();
// 	});

// 	// After running tests, close the database connection
// 	after((done) => {
// 		db.close((err) => {
// 			if (err) {
// 				console.error('Error closing the database:', err);
// 			}
// 			done();
// 		});
// 	});

// 	// Test the createNote function
// 	it('should create a new note', (done) => {
// 		const newNote = {
// 			idUser: 1,
// 			title: 'Test Note',
// 			description: 'This is a test note.',
// 		};

// 		chai
// 			.request(app)
// 			.post('/create-note') // Replace with the actual route for creating a note
// 			.send(newNote)
// 			.end((err, res) => {
// 				expect(res).to.have.status(201);
// 				expect(res.body).to.be.an('object');
// 				expect(res.body).to.have.property('id');
// 				expect(res.body.id).to.be.a('number');
// 				expect(res.body).to.have.property('idUser', newNote.idUser);
// 				expect(res.body).to.have.property('title', newNote.title);
// 				expect(res.body).to.have.property('description', newNote.description);
// 				done();
// 			});
// 	});
// });
