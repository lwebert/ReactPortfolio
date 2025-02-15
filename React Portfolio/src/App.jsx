//Module 12-23:
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

export default function App() {
	return (
		<div>
			<Header>
				<Navigation />
			</Header>
			{/* <main> */}
			<main className="container">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

