const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../../server');
const supertest = require('supertest');

chai.use(chaiHttp);
const expect = chai.expect;

describe('User Registration', () => {
	// Define a variable to store the user credentials for testing
	let userCredentials = {
		email: 'test@example.com',
		password: 'Tstpassword123!!',
	};

	// Use a before hook to create a user before testing
	before((done) => {
		supertest(app)
			.post('/user/register/')
			.send(userCredentials)
			.end((err, res) => {
				if (err) {
					console.error('Error creating user:', err);
					done(err);
				} else {
					done();
				}
			});
	});

	it('should return a 400 Bad Request if email is missing', (done) => {
		chai
			.request(app)
			.post('/user/register/')
			.send({ password: 'testpassword' })
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.text).to.equal(
					'All inputs are required - email && password'
				);
				done();
			});
	});

	it('should return a 400 Bad Request if email is invalid', (done) => {
		chai
			.request(app)
			.post('/user/register/')
			.send({ email: 'invalid_email', password: 'testpassword' })
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.text).to.equal('Invalid email address');
				done();
			});
	});

	it('should return a 409 Conflict if the user already exists', (done) => {
		chai
			.request(app)
			.post('/user/register/')
			.send(userCredentials) // Attempt to create the same user again
			.end((err, res) => {
				expect(res).to.have.status(409);
				expect(res.body)
					.to.have.property('message')
					.to.equal('User with this email already exists.');
				done();
			});
	});

	// Add more test cases for password validation, etc.
});
