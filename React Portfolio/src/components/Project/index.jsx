import './Project.css';
import { PropTypes } from 'prop-types';

export default function Project({
	name,
	gitHub,
	description,
	projclass,
}) {
	return (
		<div className={projclass + ' ' + 'project-container'}>
			<div>{name}</div>
			<div>{description}</div>

			<a href={gitHub}>repo link</a>
		</div>
	);
}

Project.propTypes = {
	name: PropTypes.string.isRequired,
	gitHub: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	projclass: PropTypes.string.isRequired,
};
