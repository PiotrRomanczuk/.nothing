const register = require('./register');
const login = require('./login');
const getUser = require('./getUser');
const getAllUsers = require('./getAllUsers');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const adminStatus = require('./adminStatus');

module.exports = {
	register,
	login,
	getUser,
	getAllUsers,
	updateUser,
	deleteUser,
	adminStatus,
};
