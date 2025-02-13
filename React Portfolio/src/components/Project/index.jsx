import './Project.css';

export default function Project(projects) {
    const { a, b } = projects // destructure props
	return (
		<div>
			<div className="project-title"></div>
            <a className="project-github"></a>
		</div>
	);
}
