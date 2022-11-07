import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './components/PageWelcome';
import { PageUseToggle } from './components/PageUseToggle';
import { PageUseFetch } from './components/PageUseFetch';

function App() {
	return (
		<div className="App">
			<h1>Custom Hooks Site</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink> 
				<NavLink to="/useToggle">useToggle</NavLink>
				<NavLink to="/useFetch">useFetch</NavLink>
			</nav>
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/useToggle" element={<PageUseToggle />} />
				<Route path="/useFetch" element={<PageUseFetch />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
