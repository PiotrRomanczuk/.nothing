import React from 'react';

import NavBar from '../shared/NavBar';
import Card from '../shared/Card';

const Dashboard = () => {
	return (
		<main className='flex flex-col'>
			<NavBar />

			{/* <h1>Hello from ToDo-App</h1> */}
			{/* <CardHeader /> */}

			<div className=''>
				<Card />
			</div>
		</main>
	);
};

export default Dashboard;
