const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const register = require('../controllers/users/register');
const getUser = require('../controllers/users/getUser');

const {
	validatePassword,
	validateEmail,
} = require('../utils/email&passValidate');

// Create a new user registration route (POST /signup)
router.post('/register', register);

// Create a route to retrieve a user's profile (GET /user)
router.get('/', getUser);

// Create a route to update a user's profile (PATCH /users/:userId)
router.patch('/:userId', (req, res) => {
	// Implementation to update a user's profile, restricted to the user themselves
	// ...
});

// Create a route to retrieve all users (GET /users/all)
router.get('/all', (req, res) => {
	// Implementation to retrieve all users, available to all users
	// ...
});

// Create a route to update a user's role (PATCH /user/change-role/:userId)
router.patch('/change-role/:userId', (req, res) => {
	// Implementation to update a user's role, restricted to admins
	// ...
});

// Create a route to delete a user (DELETE /user/:userId)
router.delete('/:userId', (req, res) => {
	// Implementation to delete a user, restricted to admins
	// ...
});

module.exports = router;
