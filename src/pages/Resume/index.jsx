import './Resume.css';
import resumePDF from '../../assets/Resume_forPortfolio_3-15-25.pdf';

export default function Resume() {
	return (
		<div className="resume">
			<p>
				Click here for resume:{' '}
				<a href={resumePDF} target="_blank" rel="noopener noreferrer">
					Webert Resume
				</a>
			</p>

			<div className="resume-container">
				<iframe src={resumePDF} title="Resume" />
			</div>
		</div>
	);
}
