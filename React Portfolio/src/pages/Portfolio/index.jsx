import './Portfolio.css';
import Project from '../../components/Project';

export default function Portfolio() {
	const projectArray = [
		{
			title: 'My Movie Critic',
			deployedUrl: 'https://lwebert.github.io/Project1-Team2/',
			gitHub: 'https://github.com/lwebert/Project1-Team2',
			projclass: 'my-movie-critic',
			image: 'my-movie-critic.jpg'
		},
		{
			title: 'Weather Dashboard API',
			deployedUrl: 'https://challenge-09-weather-apis.onrender.com',
			gitHub: 'https://github.com/lwebert/Challenge-09-WeatherDashboard',
			projclass: 'weather-dashboard',
			image: 'food-festival.jpg',
		},
		{
			title: 'SQL Employee Tracker',
			deployedUrl: '',
			gitHub: 'https://github.com/lwebert/Challenge-10-EmployeeTracker',
			projclass: 'employee-tracker',
			image: 'budget-tracker.jpg',
		},
        {
			title: 'Truck-A-Licious',
			deployedUrl: 'https://truck-a-licious.onrender.com',
			gitHub: 'https://github.com/lwebert/Project1-Team2',
			projclass: 'my-movie-critic',
		},
        // {
		// 	title: 'My Movie Critic',
		// 	deployedUrl: 'https://lwebert.github.io/Project1-Team2/',
		// 	gitHub: 'https://github.com/lwebert/Project1-Team2',
		// 	projclass: 'my-movie-critic',
		// },
        // {
		// 	title: 'My Movie Critic',
		// 	deployedUrl: 'https://lwebert.github.io/Project1-Team2/',
		// 	gitHub: 'https://github.com/lwebert/Project1-Team2',
		// 	projclass: 'my-movie-critic',
		// },
	];

	return (
		<div className="portfolio-container">
			<div>Portfolio</div>
			<div className="projects-container">
				{projectArray.map((project, index) => (
					<Project
                        projclass={project.projclass}
						key={index}
						name={project.name}
						gitHub={project.gitHub}
						image={project.image}
						description={project.description}
					/>
				))}
			</div>
		</div>
	);
}

//hard code an array of objects for projects. pass as prop to Project

//fetch repo list from github - github API, fetch public repos from inside React App - map over repos and create card for each
