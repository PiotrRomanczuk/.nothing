const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, startServer, closeServer } = require('../server.js'); // Replace with the actual path to your Express app file

chai.use(chaiHttp);
const expect = chai.expect;

let server;
const testPort = 3001;

describe('Express App', () => {
	before((done) => {
		// Start the server on the test port before running tests
		server = app.listen(testPort, () => {
			console.log(`Server started on port ${testPort}`);
			done();
		});
	});

	it('should return a 200 status code for GET /', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});

	after((done) => {
		// Close the server after running tests
		server.close((err) => {
			if (err) {
				console.error(err);
				done(err);
			} else {
				console.log('Server closed');
				done();
			}
		});
	});

	// Add more test cases as needed
});
