import './Project.css';
import { FaGithub } from 'react-icons/fa';

// import { PropTypes } from 'prop-types';

export default function Project({
	title,
	deployedUrl,
	gitHub,
	projclass,
	image,
}) {
	return (
		<div
			className={'project-container'}
			style={{ backgroundImage: `url('${image}')` }}>
			<div className="project-info">
				{/* <h4>{title}</h4> */}
				<a href={deployedUrl} target="_blank">
					{title}
				</a>
				<a href={gitHub} target="_blank">
					<FaGithub height="15px" width="15px" />
				</a>
			</div>
		</div>
		// <div className='project-container' id={projclass}>
		// 	<div>{title}</div>
		// 	<a href={gitHub}>repo link</a>
		// </div>
	);
}

// Project.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	gitHub: PropTypes.string.isRequired,
// 	description: PropTypes.string.isRequired,
// 	projclass: PropTypes.string.isRequired,
// };
