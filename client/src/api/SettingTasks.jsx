import React from 'react';
import FetchNotes from './FetchNotes';
import { useState, useEffect } from 'react';

const SettingTasks = async () => {
	const [tasks, setTasks] = useState(null);

	const responseData = await FetchNotes();
	setTasks(responseData);

	console.log(tasks);

	// fetchTasks();
};

export default SettingTasks;
