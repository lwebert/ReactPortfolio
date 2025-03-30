import './Portfolio.css';
import Project from '../../components/Project';

import myMovieCriticImg from '../../assets/my-movie-critic.jpg';
import weatherDashboardImg from '../../assets/weather-dashboard.jpg';
import kanbanBoardImg from '../../assets/kanban-board.jpg';
import truckALiciousImg from '../../assets/truckAlicious.jpg';
import laurenImg from '../../assets/Lauren.jpg'

export default function Portfolio() {
	const projectArray = [
		{
			title: 'My Movie Critic',
			deployedUrl: 'https://lwebert.github.io/Project1-Team2/',
			gitHub: 'https://github.com/lwebert/Project1-Team2',
			projclass: 'my-movie-critic',
			image: myMovieCriticImg,
		},
		{
			title: 'Weather Dashboard API',
			deployedUrl: 'https://challenge-09-weather-apis.onrender.com/',
			gitHub: 'https://github.com/lwebert/Challenge-09-WeatherDashboard',
			projclass: 'weather-dashboard',
			image: weatherDashboardImg,
		},
		{
			title: 'React Kanban Board',
			deployedUrl: 'https://challenge-14-kanban.onrender.com/',
			gitHub: 'https://github.com/lwebert/Challenge-14-Kanban',
			projclass: 'kanban-board',
			image: kanbanBoardImg,
		},
		{
			title: 'Truck-A-Licious',
			deployedUrl: 'https://truck-a-licious.onrender.com',
			gitHub: 'https://github.com/lwebert/Project2-Group3',
			projclass: 'truckAlicious',
			image: truckALiciousImg,
		},
		{
			title: 'Coming-Soon',
			deployedUrl: '',
			gitHub: '',
			projclass: 'comingSoon',
			image: laurenImg,
		},
		{
			title: 'Coming-Soon',
			deployedUrl: 'https://truck-a-licious.onrender.com',
			gitHub: 'https://github.com/lwebert/Project2-Group3',
			projclass: 'comingSoon',
			image: laurenImg,
		},
	];

	projectArray.map((project) => console.log(project.image));

	return (
		<div className="portfolio-container">
			<h3>Portfolio</h3>
			<div className="projects-container">
				{projectArray.map((project, index) => (
					<Project
						key={index}
						title={project.title}
						deployedUrl={project.deployedUrl}
						gitHub={project.gitHub}
						projclass={project.projclass}
						image={project.image}
						// description={project.description}
					/>
				))}
			</div>
		</div>
	);
}

//hard code an array of objects for projects. pass as prop to Project

//fetch repo list from github - github API, fetch public repos from inside React App - map over repos and create card for each
