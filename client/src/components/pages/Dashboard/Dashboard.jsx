import React, { useState, useEffect } from 'react';

import Card from '../../shared/Card';
import Sidebar from './Sidebar';
import SettingTasks from '../../../api/SettingTasks';
import Chat from '../../shared/Chat';

const Dashboard = () => {
	const [showChat, setShowChat] = useState(false);

	const toggleChat = () => {
		setShowChat(!showChat);
	};

	const loadDataOnlyOnce = () => {
		console.log('loadDataOnlyOnce');
	};

	useEffect(() => {
		loadDataOnlyOnce(); // this will fire only on first render
	}, []);

	return (
		<main className='flex flex-col'>
			<div>
				<Sidebar>
					{/* <h1>Hello from ToDo-App</h1> */}
					{/* <CardHeader /> */}

					<div className='flex mb-10'>
						<Card title={'Java'} content={'Lorem ipsum'} />
						<Card title={'Java'} content={'Lorem ipsum'} />
						<Card title={'Java'} content={'Lorem ipsum'} />
						<Card title={'Java'} content={'Lorem ipsum'} />
					</div>
					<div>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
							onClick={toggleChat}
						>
							{showChat ? 'Hide Chat' : 'Show Chat'}
						</button>
						{showChat && <Chat />}
					</div>
				</Sidebar>
			</div>
		</main>
	);
};

export default Dashboard;
