import './App.css';
import NavBar from './components/NavBar';
import FetchData from './components/Fetch';
import CardHeader from './components/CardHeader';
import Card from './components/Card';

import { useState, useEffect } from 'react';

function App() {
	const [tasks, setTasks] = useState(null);

	const settingTasks = () => {};

	useEffect(() => {
		// Call the FetchData function and set the data in state
		async function fetchTasks() {
			const responseData = await FetchData();
			setTasks(responseData);
		}

		fetchTasks();
	}, []);

	console.log(tasks);

	return (
		<div className='app'>
			<NavBar />
			<main>
				{/* <h1>Hello from ToDo-App</h1> */}
				{/* <CardHeader /> */}

				<div className='container box'>
					<Card />
				</div>
			</main>
		</div>
	);
}

export default App;
