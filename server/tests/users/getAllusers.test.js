const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const { app } = require('../../server'); // Replace with the path to your Express app

chai.use(chaiHttp);

describe('getAllUsers', () => {
	it('should return a list of users', (done) => {
		chai
			.request(app) // Use your Express app instance
			.get('/user/') // Replace with the actual route path to getAllUsers
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.be.an('array');
				expect(res.body).to.have.length.above(0);
				done();
			});
	});

	// it('should handle database errors', (done) => {
	// 	// Mock the database to simulate an error
	// 	const originalDB = require('sqlite3');
	// 	const dbMock = {
	// 		all: (query, params, callback) => {
	// 			callback(new Error('Database error'), null);
	// 		},
	// 		close: () => {},
	// 	};
	// 	require('sqlite3').Database = function () {
	// 		return dbMock;
	// 	};

	// 	chai
	// 		.request(app) // Use your Express app instance
	// 		.get('/user/') // Replace with the actual route path to getAllUsers
	// 		.end((err, res) => {
	// 			// Restore the original database object
	// 			require('sqlite3').Database = originalDB;

	// 			expect(err).to.be.null;
	// 			expect(res).to.have.status(500);
	// 			expect(res.body).to.have.property('error', 'Unable to retrieve users.');
	// 			done();
	// 		});
	// });

	it('should handle empty user list', (done) => {
		// Mock the database to return an empty list of users
		const originalDB = require('sqlite3');
		const dbMock = {
			all: (query, params, callback) => {
				callback(null, []);
			},
			close: () => {},
		};
		require('sqlite3').Database = function () {
			return dbMock;
		};

		chai
			.request(app) // Use your Express app instance
			.get('/user') // Replace with the actual route path to getAllUsers
			.end((err, res) => {
				// Restore the original database object
				require('sqlite3').Database = originalDB;

				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.be.an('array');
				expect(res.body).to.have.length(0);
				done();
			});
	});
});
