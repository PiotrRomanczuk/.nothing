const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Login API', () => {
	it('should return 400 for missing inputs', (done) => {
		chai
			.request(app)
			.post('/user/login')
			.send({})
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body)
					.to.have.property('error')
					.eql('All inputs are required - email && password');
				done();
			});
	});

	it('should return 400 for non-existent user', (done) => {
		chai
			.request(app)
			.post('/user/login')
			.send({ email: 'nonexistent@example.com', password: 'password123' })
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body).to.have.property('error').eql('User does not exist.');
				done();
			});
	});

	it('should return 400 for invalid password', (done) => {
		chai
			.request(app)
			.post('/user/login')
			.send({ email: 'test@test.pl', password: 'wrongpassword' })
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body).to.have.property('error').eql('Invalid password.');
				done();
			});
	});

	it('should return success for valid credentials', (done) => {
		chai
			.request(app)
			.post('/user/login')
			.send({ email: 'test@test.pl', password: 'QWErty123!' })
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property('message').eql('Success');
				done();
			});
	});
});
