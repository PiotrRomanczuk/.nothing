function validateEmail(email) {
	// Regular expression for a valid email address
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validatePassword(password) {
	// Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
	return passwordRegex.test(password);
}

module.exports = { validateEmail, validatePassword };
