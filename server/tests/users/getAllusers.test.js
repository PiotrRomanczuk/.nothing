const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const { app } = require('../../server');

chai.use(chaiHttp);

describe('getAllUsers', () => {
	it('should return a list of users', (done) => {
		chai
			.request(app) // Replace with your server URL
			.get('/user') // Replace with the actual endpoint URL
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.be.an('array');
				// You can add more specific assertions here based on your API response

				done();
			});
	});
});
