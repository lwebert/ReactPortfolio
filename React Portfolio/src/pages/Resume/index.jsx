import './Resume.css';
import { IoMdBriefcase } from 'react-icons/io';

export default function Resume() {
	return (
		<div>
			<div>Resume</div>
			{/* <iframe src="URL"></iframe> -- this renders another webpage in the current web browser*/}
			{/* maybe an <img> or <a> or <src> tag... import resume as JPEG to assets folder*/}
			<div className="resume">
				<p>Click here for resume:</p>
				<a href="https://Google.com" target="_blank">
					<IoMdBriefcase height="40px" width="40px" />
				</a>
			</div>
		</div>
	);
}

