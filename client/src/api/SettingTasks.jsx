import React from 'react';
import FetchData from './Fetch';
import { useState, useEffect } from 'react';

const SettingTasks = () => {
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
};

export default SettingTasks;
