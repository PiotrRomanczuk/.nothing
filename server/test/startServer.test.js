const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
const { app, startServer } = require('../server'); // Import your Express app

describe('startServer', () => {
	let connectStub, listenStub;

	beforeEach(() => {
		connectStub = sinon.stub(mongoose, 'connect');
		listenStub = sinon.stub(app, 'listen');
	});

	afterEach(() => {
		connectStub.restore();
		listenStub.restore();
	});

	it('should start the server after successfully connecting to MongoDB', async () => {
		connectStub.resolves(); // Simulate a successful MongoDB connection

		await startServer();

		expect(connectStub.calledOnce).to.be.true;
		expect(
			connectStub.calledWith(sinon.match.string, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
		).to.be.true;

		expect(listenStub.calledOnce).to.be.true;
		expect(listenStub.calledWith(sinon.match.number, sinon.match.func)).to.be
			.true;
	});

	// it('should handle errors and log them', async () => {
	// 	const errorMessage = 'MongoDB connection error';
	// 	connectStub.rejects(new Error(errorMessage));

	// 	await startServer();

	// 	expect(connectStub.calledOnce).to.be.true;
	// 	expect(
	// 		connectStub.calledWith(sinon.match.string, {
	// 			useNewUrlParser: true,
	// 			useUnifiedTopology: true,
	// 		})
	// 	).to.be.true;

	// 	expect(listenStub.called).to.be.false; // listen should not be called in case of an error
	// });
});
