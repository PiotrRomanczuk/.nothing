import React from 'react';
import FetchNotes from './FetchNotes';
import { useState, useEffect } from 'react';

const SettingTasks = () => {
	const [tasks, setTasks] = useState(null);

	const settingTasks = () => {};

	useEffect(() => {
		// Call the FetchData function and set the data in state
		async function fetchTasks() {
			const responseData = await FetchNotes();
			setTasks(responseData);
		}

		fetchTasks();
	}, []);

	console.log(tasks);
};

export default SettingTasks;
