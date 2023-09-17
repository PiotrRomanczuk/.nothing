const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../../server');
const supertest = require('supertest');

chai.use(chaiHttp);
const expect = chai.expect;

describe('User Registration', () => {
	it('should successfully register a new user', (done) => {
		supertest(app)
			.post('/user/register/')
			.send({ email: 'test@example.com', password: 'Tstpassword123!!' })
			.end((err, res) => {
				console.log(res.status);
				expect(res).to.have.status(201);
				expect(res.body)
					.to.have.property('message')
					.to.equal('User created successfully.');
				done();
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

	// Add more test cases for password validation, duplicate registration, etc.
});
