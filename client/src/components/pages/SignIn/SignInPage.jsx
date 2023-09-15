import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignInPhoto from './SignInPhoto';
import SocialMediaLogin from './SocialMediaLogin';
import ModalSingle from '../../shared/Modals/ModalSingle';

const SignInPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

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

			const responseData = await response.json();
			console.log('Response:');
			console.log(responseData);

			if (!response.ok) {
				openModal();
				throw new Error(`HTTP Error! Status: ${response.status} + ${response}`);
			}

			if (responseData.message === 'Success') {
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
			<div className='flex flex-1 justify-center h-full items-center m-auto'>
				<div className='flex flex-col m-auto'>
					<SignInForm
						formData={formData}
						handleInputChange={handleInputChange}
						handleSubmit={handleSubmit}
					/>
					<SocialMediaLogin />
				</div>
				{isModalOpen ? (
					<div>
						<ModalSingle
							isOpen={isModalOpen}
							onClose={closeModal}
							IconColor='red'
							Title='Error'
							Info='Wrong username or password'
						></ModalSingle>
					</div>
				) : null}
				<SignInPhoto />
			</div>
		</>
	);
};

export default SignInPage;
