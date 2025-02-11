import './Footer.css';

export default function Footer() {
	const footers = ['GitHub', 'LinkedIn', 'Copyright'];
	return (
		<div className="foot-container">
			<div className="foot-list">
				{footers.map((foot, index) => (
					<a className="nav-item" key={index}>
						{foot}
					</a>
				))}

				{/* <li className="foot-item">Copyright</li>
				<li className="foot-item">GitHub</li>
				<li className="foot-item">LinkedIn</li> */}
			</div>
		</div>
	);
}
