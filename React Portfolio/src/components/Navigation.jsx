//TODO: WHEN I view the navigation titles, THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">About Me</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/resume">Resume</Link>
				</li>
			</ul>
		</nav>
	);
}
