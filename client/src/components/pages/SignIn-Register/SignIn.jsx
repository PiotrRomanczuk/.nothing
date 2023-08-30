import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import SocialMediaLogin from './SocialMediaLogin';

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		};

		try {
			const response = await fetch(
				'http://localhost:8080/user/login',
				requestOptions
			);

			if (!response.ok) {
				throw new Error(`HTTP Error! Status: ${response.status}`);
			}

			const responseData = await response.json();
			console.log('Response:', responseData);

			if (responseData === 'Success') {
				navigate('/dashboard');
			} else {
				alert('Authentication failed. Please try again.');
				// MODAL ERROR
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		console.log(formData);
	};
	return (
		<>
			<div className='flex flex-1 justify-center m-auto'>
				<div className='flex flex-col m-auto'>
					<SignInForm
						formData={formData}
						handleInputChange={handleInputChange}
						handleSubmit={handleSubmit}
					/>
					<SocialMediaLogin />
				</div>
				<div className='relative hidden w-0 flex-1 lg:block'>
					<img
						className='absolute inset-0 h-full w-full object-cover'
						src='https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
						alt=''
					/>
				</div>
			</div>
		</>
	);
};
export default SignIn;
