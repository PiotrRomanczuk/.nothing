require('dotenv').config();

const User = require('../../models/mongoDB/userModel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
	validatePassword,
	validateEmail,
} = require('../../utils/email&passValidate');

const register = async (req, res) => {
	try {
		const { first_name, last_name, email, password } = req.body;

		console.log(email, password);

		if (!(email && password)) {
			return res
				.status(400)
				.send('All inputs are required - email && password');
		}

		if (!validateEmail(email)) {
			return res.status(400).send('Invalid email address');
		}

		if (!validatePassword(password)) {
			return res.status(400).send('Invalid password format');
		}

		const oldUser = await User.findOne({ email });
		console.log(oldUser);

		if (oldUser) {
			return res.status(409).send('User Already Exist. Please Login');
		}

		encryptedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			first_name,
			last_name,
			email: email.toLowerCase(),
			password: encryptedPassword,
		});

		const token = jwt.sign(
			{ user_id: user._id, email },
			process.env.TOKEN_KEY,
			{
				expiresIn: '2h',
			}
		);

		user.token = token;

		res.status(201).json(user);
	} catch (err) {
		console.log(err);
	}
};

module.exports = register;
