import './App.css';
import NavBar from './components/NavBar';
import FetchData from './components/Fetch';
import CardHeader from './components/CardHeader';

function App() {
	FetchData();

	return (
		<div className='app'>
			<NavBar />
			<h1>Hello from ToDo-App</h1>
			<CardHeader />
		</div>
	);
}

export default App;
