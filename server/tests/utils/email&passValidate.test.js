const {
	validateEmail,
	validatePassword,
} = require('../../utils/email&passValidate');
const chai = require('chai');
const expect = chai.expect;

describe('Email Validation', () => {
	it('should return true for a valid email', () => {
		expect(validateEmail('test@example.com')).to.be.true;
	});

	it('should return false for an invalid email', () => {
		expect(validateEmail('invalid-email')).to.be.false;
	});

	it('should return false for an email with spaces', () => {
		expect(validateEmail('test with spaces@example.com')).to.be.false;
	});
});

describe('Password Validation', () => {
	it('should return true for a valid password', () => {
		expect(validatePassword('Passw0rd!')).to.be.true;
	});

	it('should return false for a password with insufficient length', () => {
		expect(validatePassword('Short1!')).to.be.false;
	});

	it('should return false for a password without an uppercase letter', () => {
		expect(validatePassword('password1!')).to.be.false;
	});

	it('should return false for a password without a lowercase letter', () => {
		expect(validatePassword('PASSWORD1!')).to.be.false;
	});

	it('should return false for a password without a digit', () => {
		expect(validatePassword('Password!')).to.be.false;
	});

	it('should return false for a password without a special character', () => {
		expect(validatePassword('Password1')).to.be.false;
	});
});
