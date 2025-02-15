import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
	// const footers = ['GitHub', 'LinkedIn', 'Copyright'];
	return (
		<div className="foot-container">
			<div className="foot-list">
				{/* {footers.map((foot, index) => (
					<a className="nav-item" key={index}>
						{foot}
					</a>
				))} */}

				{/* //TODO: Put a logo instead of text inside the a tags, update hrefs for links */}
				<div className="foot-item copyright" key="Copyright">
					<a href="https://Google.com" target="_blank">
						<img
							src="../src/assets/react.svg"
							alt="Copyright logo"></img>
					</a>
				</div>

				<div className="foot-item github" key="GitHub">
					<a href="https://github.com/lwebert" target="_blank">
						<FaGithub height="15px" width="15px" />
					</a>
				</div>

				<div className="foot-item linkedin" key="LinkedIn">
					<a
						href="https://linkedin.com/in/lauren-webert"
						target="_blank">
						<FaLinkedin height="15px" width="15px" />
					</a>
				</div>
			</div>
		</div>
	);
}
