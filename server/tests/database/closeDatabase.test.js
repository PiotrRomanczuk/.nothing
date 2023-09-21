// const chai = require('chai');
// const expect = chai.expect;
// const sinon = require('sinon');
// const closeDatabase = require('../../database/closeDatabase');

// // Mock the sqlite3.Database class
// const Database = require('sqlite3').verbose().Database;
// const dbMock = sinon.createStubInstance(Database);

// describe('closeDatabase', () => {
// 	let processExitStub;

// 	// beforeEach(() => {
// 	// 	// Create a stub for process.exit
// 	// 	processExitStub = sinon.stub(process, 'exit');
// 	// });

// 	afterEach(() => {
// 		// Restore the original process.exit
// 		processExitStub.restore();
// 	});

// 	it('should close the database and exit with 0 on SIGINT', (done) => {
// 		// Mock the db.close method to call the callback
// 		dbMock.close.callsFake((callback) => {
// 			callback();
// 		});

// 		// Replace the real db with the mock
// 		sinon.stub(require('sqlite3').verbose(), 'Database').returns(dbMock);

// 		// Call closeDatabase
// 		closeDatabase();

// 		// Simulate SIGINT
// 		process.emit('SIGINT');

// 		// Assert that db.close was called
// 		expect(dbMock.close.calledOnce).to.be.true;

// 		// Assert that process.exit was called with code 0
// 		expect(processExitStub.calledWith(0)).to.be.true;

// 		done();
// 	});

// 	// it('should close the database and exit with an error code on uncaught exception', (done) => {
// 	// 	// Mock the db.close method to call the callback
// 	// 	dbMock.close.callsFake((callback) => {
// 	// 		callback();
// 	// 	});

// 	// 	// Replace the real db with the mock
// 	// 	sinon.stub(require('sqlite3').verbose(), 'Database').returns(dbMock);

// 	// 	// Call closeDatabase
// 	// 	closeDatabase();

// 	// 	// Simulate an uncaught exception
// 	// 	const error = new Error('Uncaught exception');
// 	// 	process.emit('uncaughtException', error);

// 	// 	// Assert that db.close was called
// 	// 	expect(dbMock.close.calledOnce).to.be.true;

// 	// 	// Assert that process.exit was called with an error code (non-zero)
// 	// 	expect(processExitStub.calledWith(1)).to.be.true;

// 	// 	done();
// 	// });

// 	// it('should close the database on application exit', (done) => {
// 	// 	// Mock the db.close method to call the callback
// 	// 	dbMock.close.callsFake((callback) => {
// 	// 		callback();
// 	// 	});

// 	// 	// Replace the real db with the mock
// 	// 	sinon.stub(require('sqlite3').verbose(), 'Database').returns(dbMock);

// 	// 	// Call closeDatabase
// 	// 	closeDatabase();

// 	// 	// Simulate an application exit
// 	// 	process.emit('exit');

// 	// 	// Assert that db.close was called
// 	// 	expect(dbMock.close.calledOnce).to.be.true;

// 	// 	done();
// 	// });
// });
