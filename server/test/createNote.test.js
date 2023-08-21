// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const { expect } = require('chai');
// const { app, startServer } = require('../server.js');
// const Note = require('../models/noteModel');

// // const agent = chaiHttp.request.agent(app); // Assuming you have the 'chai-http' package installed

// before(async () => {
// 	await startServer(); // Start the server before running tests
// 	// Clear the database or perform any setup you need before testing
// 	await Note.deleteMany({});
// });

// describe('Note CRUD operations', () => {
// 	it('should create a new note', async () => {
// 		const newNoteData = {
// 			title: 'Test Note Title',
// 			description: 'Test Note Description',
// 		};

// 		const response = await agent.post('/notes').send(newNoteData);

// 		expect(response).to.have.status(201);
// 		expect(response.body).to.have.property('noteId');
// 		expect(response.body.title).to.equal(newNoteData.title);
// 		expect(response.body.description).to.equal(newNoteData.description);
// 	});

// 	it('should retrieve all notes', async () => {
// 		const response = await agent.get('/notes');

// 		expect(response).to.have.status(200);
// 		expect(response.body).to.be.an('array');
// 	});

// 	it('should retrieve a specific note by ID', async () => {
// 		const createdNote = await Note.create({
// 			title: 'Test Note Title',
// 			description: 'Test Note Description',
// 		});

// 		const response = await agent.get(`/notes/${createdNote.noteId}`);

// 		expect(response).to.have.status(200);
// 		expect(response.body).to.have.property('noteId');
// 		expect(response.body.title).to.equal(createdNote.title);
// 		expect(response.body.description).to.equal(createdNote.description);
// 	});

// 	// Similarly, you can write tests for update and delete operations
// });
