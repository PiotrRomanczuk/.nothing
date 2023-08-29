import './App.css';
import NavBar from './components/shared/NavBar';
import FetchData from './api/Fetch';
import CardHeader from './components/shared/CardHeader';
import Card from './components/shared/Card';

import { useState, useEffect } from 'react';
import SettingTasks from './api/SettingTasks';
import SignIn from './components/login-reg/SignIn';

function App() {
	return (
		<div className='app'>
			<SignIn />
		</div>
	);
}

export default App;
