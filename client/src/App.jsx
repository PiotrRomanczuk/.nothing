import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import SignIn from './components/pages/SignIn';
import Dashboard from './components/pages/Dashboard';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignIn />} />
				<Route path='/dashboard' element={<Dashboard />} />
				{/* <Route path='/profile' element={<Profile />} /> // TODO make those components
				<Route path='/settings' element={<Settings />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
