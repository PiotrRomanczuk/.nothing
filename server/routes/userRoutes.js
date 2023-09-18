const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const {
	register,
	login,
	getUser,
	updateUser,
	deleteUser,
	getAllUsers,
	adminStatus,
} = require('../controllers/users/AllUsers');

router.get('/login', function (req, res, next) {
	console.log(`login `);
	console.log(req.params);
	res.render('login');
});

// Create a new user login route (POST /login)
router.post('/login', login);
//TESTED

// Create a new user registration route (POST /signup)
router.post('/register', register);
// TESTED

// Create a route to retrieve all users (GET /users/all)
router.get('/', getAllUsers);

// Create a route to retrieve a user's profile (GET /user)
router.get('/:userId', getUser);

// Create a route to update a user's profile (PATCH /users/:userId)
router.patch('/:userId', updateUser);

// Create a route to update a user's role (PATCH /user/change-role/:userId)
router.patch('/change-role/:userId', adminStatus);

// Create a route to delete a user (DELETE /user/:userId)
router.delete('/:userId', deleteUser);

module.exports = router;
