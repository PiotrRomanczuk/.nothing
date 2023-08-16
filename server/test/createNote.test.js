const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('createNote', () => {
	it('should create a new note', async () => {
		const noteData = {
			title: 'Test Note',
			description: 'This is a test note.',
		};

		try {
			const res = await chai.request(app).post('/notes').send(noteData);

			expect(res).to.have.status(201);
			expect(res.body).to.be.an('object');
			expect(res.body).to.have.property('_id');
			expect(res.body.title).to.equal(noteData.title);
			expect(res.body.description).to.equal(noteData.description);
		} catch (error) {
			throw error; // Rethrow any errors for Mocha to handle
		}
	});
});
