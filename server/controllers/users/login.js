const User = require('../../models/mongoDB/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!(email && password)) {
			return res.status(400).send('All input are required - email && password');
		}

		console.log(email, password);

		const user = await User.findOne({ email });

		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign(
				{ user_id: user._id, email },
				process.env.TOKEN_KEY,
				{
					expiresIn: '10m',
				}
			);

			user.token = token;

			// console.log(token);
			return res.status(200).json(user);
		}

		return res.status(400).send('Invalid Credentials');
	} catch (err) {
		console.log(err);
	}
};

module.exports = login;
