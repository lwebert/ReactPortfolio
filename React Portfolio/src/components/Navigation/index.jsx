import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
	const currentPage = useLocation().pathname;

	return (
		<div className="nav-container">
			<ul className="nav-list">
			{/* <ul className="nav nav-tabs"> */}
				<li className="nav-item">
					<Link
						to="/"
						className={
							currentPage === '/' ? 'nav-item active' : 'nav-item'
						}>
						About Me
					</Link>
				</li>

				<li className="nav-item">
					<Link
						to="/portfolio"
						className={
							currentPage === '/portfolio'
								? 'nav-item active'
								: 'nav-item'
						}>
						Portfolio
					</Link>
				</li>

				<li className="nav-item">
					<Link
						to="/contact"
						className={
							currentPage === '/contact'
								? 'nav-item active'
								: 'nav-item'
						}>
						Contact
					</Link>
				</li>

				<li className="nav-item">
					<Link
						to="/resume"
						className={
							currentPage === '/resume'
								? 'nav-item active'
								: 'nav-item'
						}>
						Resume
					</Link>
				</li>
			</ul>
		</div>
	);
}
