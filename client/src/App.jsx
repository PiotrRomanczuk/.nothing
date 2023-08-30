import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import SignInPage from './components/pages/SignIn/SignInPage';
import Dashboard from './components/pages/Dashboard/Dashboard';
import NotFound from './components/pages/404/NorFound';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	``;
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignInPage />} />
				<Route path='/dashboard' element={<Dashboard />} />
				{/* <Route path='/profile' element={<Profile />} /> // TODO make those components
				<Route path='/settings' element={<Settings />} /> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
