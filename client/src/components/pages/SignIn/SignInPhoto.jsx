import React from 'react';

const SignInPhoto = () => {
	return (
		<>
			<div className='relative hidden w-0 flex-1 lg:block'>
				<img
					className='absolute inset-0 h-full w-full object-cover'
					src='https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
					alt=''
				/>
			</div>
		</>
	);
};

export default SignInPhoto;
