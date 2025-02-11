import './Navigation.css';
import { Link } from 'react-router-dom';

// import About from '../../pages/About';

export default function Navigation() {
	// const buttons = ['About Me', 'Portfolio', 'Contact', 'Resume'];

	return (
		<div className="nav-container">
			<ul className="nav-list">
				{/* {buttons.map((button, index) => (
					<li className="nav-item" key={index}>
						{button}
					</li>
				))} */}

				{/* <Link to="/" className="nav-item">
					Home
				</Link>
				<Link to="/about" className="nav-item">
					About Me
				</Link> */}
				<Link to="/" className="nav-item">
					About Me
				</Link>
				<Link to="/portfolio" className="nav-item">
					Portfolio
				</Link>
				<Link to="/contact" className="nav-item">
					Contact
				</Link>
				<Link to="/resume" className="nav-item">
					Resume
				</Link>
			</ul>
		</div>
	);
}
