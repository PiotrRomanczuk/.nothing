// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const { app } = require('../../server'); // Assuming you have an Express app

// chai.use(chaiHttp);
// const expect = chai.expect;

// describe('getUser', () => {
// 	it('should retrieve a user profile when a valid user ID is provided', (done) => {
// 		// Assuming you have a test database with a known user
// 		const validUserId = 1;

// 		chai
// 			.request(app)
// 			.get(`/user/${validUserId}`) // Assuming the endpoint is defined in your app
// 			.end((err, res) => {
// 				expect(err).to.be.null;
// 				expect(res).to.have.status(200);
// 				expect(res.body).to.be.an('object');
// 				expect(res.body).to.have.property('id');
// 				expect(res.body).to.have.property('email');
// 				done();
// 			});
// 	});

// 	it('should return a 404 status when an invalid user ID is provided', (done) => {
// 		// Assuming you have a test database with no user with ID 999
// 		const invalidUserId = 999;

// 		chai
// 			.request(app)
// 			.get(`/user/${invalidUserId}`) // Assuming the endpoint is defined in your app
// 			.end((err, res) => {
// 				expect(err).to.be.null;
// 				expect(res).to.have.status(404);
// 				expect(res.body).to.be.an('object');
// 				expect(res.body).to.have.property('error', 'User not found');
// 				done();
// 			});
// 	});
// });
