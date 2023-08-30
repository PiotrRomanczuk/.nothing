import React from 'react';

import NavBar from './NavBar';
import Card from '../../shared/Card';
import Sidebar from './Sidebar';

const Dashboard = () => {
	return (
		<main className='flex flex-col'>
			{/* <NavBar /> */}
			<div>
				<Sidebar>
					{/* <h1>Hello from ToDo-App</h1> */}
					{/* <CardHeader /> */}

					{/* <div className='flex'> */}
					<Card title={'Java'} content={'Lorem ipsum'} />
					<Card title={'Java'} content={'Lorem ipsum'} />
					<Card title={'Java'} content={'Lorem ipsum'} />
					<Card title={'Java'} content={'Lorem ipsum'} />
					{/* </div> */}
				</Sidebar>
			</div>
		</main>
	);
};

export default Dashboard;
