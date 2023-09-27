// const chai = require('chai');
// const expect = chai.expect;

// const path = require('path');

// const openDatabase = require('../../database/openDatabase'); // Replace with the actual path to your module

// describe('openDatabase', () => {
// 	it('should open a database without errors', (done) => {
// 		const pathDB = path.join(__dirname, '../../database/main.db');
// 		const log = 'Database opened successfully';

// 		// Store the original console.log function to restore it later
// 		const originalLog = console.log;

// 		// Replace console.log with a spy function
// 		console.log = function (message) {
// 			// Check if the log message matches the expected success message
// 			expect(message).to.equal(log);

// 			// Restore the original console.log
// 			console.log = originalLog;

// 			done();
// 		};

// 		openDatabase(pathDB, log);
// 	});

// 	it('should handle errors when opening a database', (done) => {
// 		const pathDB = 'non_existent_db.sqlite'; // Use a non-existent database path to trigger an error
// 		const log = 'Database opened successfully';

// 		// Store the original console.error function to restore it later
// 		const originalError = console.error;

// 		// Replace console.error with a spy function
// 		console.error = function (message) {
// 			// Check if the message is logged (since it's an error, we're not checking its content)
// 			expect(message).to.exist;

// 			// Restore the original console.error
// 			console.error = originalError;

// 			done();
// 		};

// 		openDatabase(pathDB, log);
// 	});
// });
