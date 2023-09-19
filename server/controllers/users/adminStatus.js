const adminStatus = async (req, res) => {
	try {
		const userId = req.params.userId;
		const { isAdmin } = req.body;

		if (typeof isAdmin !== 'boolean') {
			return res
				.status(400)
				.json({ error: 'isAdmin must be a boolean value.' });
		}

		const updateQuery = 'UPDATE users SET isAdmin = ? WHERE id = ?';

		db.run(updateQuery, [isAdmin, userId], (err) => {
			if (err) {
				console.error(`SQL update error: ${err.message}`);
				return res
					.status(500)
					.json({ error: 'Unable to update user isAdmin status.' });
			}
			res
				.status(200)
				.json({ message: 'User isAdmin status updated successfully.' });
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An internal server error occurred.' });
	}
};

module.exports = adminStatus;
