const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;

// Import your Express app
const { app } = require('../../server');

describe('GET /welcome', () => {
	it('should return a 200 status code and a welcome message', (done) => {
		request(app)
			.get('/welcome')
			.set('Authorization', 'Bearer yourAccessToken')
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				expect(res.text).to.equal('Welcome 🙌 ');
				done();
			});
	});

	// Add more test cases if needed
});
