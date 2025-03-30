//Module 12-23:
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

export default function App() {
	return (
		<div className="app-container">
			<Header>
				<Navigation />
			</Header>
			{/* <main> */}
			<main className="page-container">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

