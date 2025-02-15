import './Portfolio.css';
import Project from '../../components/Project';

export default function Portfolio() {
	const projectArray = [
		{
			name: 'My Movie Critic',
			url: 'https://lwebert.github.io/Project1-Team2/',
			gitHub: 'https://github.com/lwebert/Project1-Team2',
			projclass: 'my-movie-critic',
			description:
				'A Realty Management Tool. This app is intended for private property owners who want to advertise their properties, manage their tenants and manage their real estate all in one place. This application also functions as a hub for tenants to access their property and pay their rent.',
		},
		{
			name: 'Weather Dashboard API',
			url: '',
			gitHub: 'https://github.com/lwebert/Challenge-09-WeatherDashboard',
			projclass: 'weather-dashboard',
			image: 'food-festival.jpg',
			description:
				'A modularized progressive web application that allows users to view daily schedules, testimonials, view ticket pricing information, and purchase tickets all without having the dependency of consistent internet connectivity.',
		},
		{
			name: 'SQL Employee Tracker',
			url: '',
			gitHub: 'https://github.com/lwebert/Challenge-10-EmployeeTracker',
			projclass: 'employee-tracker',
			image: 'budget-tracker.jpg',
			description:
				'Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users financial information. With that in mind, enter Budget Tracker. A Progressive Web Application that uses a noSQL database and offline persistance to deliver the ultimate end user experience for budgeting on the go.',
		},
        {
			name: 'My Movie Critic',
			url: 'https://lwebert.github.io/Project1-Team2/',
			gitHub: 'https://github.com/lwebert/Project1-Team2',
			projclass: 'my-movie-critic',
			description:
				'A Realty Management Tool. This app is intended for private property owners who want to advertise their properties, manage their tenants and manage their real estate all in one place. This application also functions as a hub for tenants to access their property and pay their rent.',
		},
        {
			name: 'My Movie Critic',
			url: 'https://lwebert.github.io/Project1-Team2/',
			gitHub: 'https://github.com/lwebert/Project1-Team2',
			projclass: 'my-movie-critic',
			description:
				'A Realty Management Tool. This app is intended for private property owners who want to advertise their properties, manage their tenants and manage their real estate all in one place. This application also functions as a hub for tenants to access their property and pay their rent.',
		},
        {
			name: 'My Movie Critic',
			url: 'https://lwebert.github.io/Project1-Team2/',
			gitHub: 'https://github.com/lwebert/Project1-Team2',
			projclass: 'my-movie-critic',
			description:
				'A Realty Management Tool. This app is intended for private property owners who want to advertise their properties, manage their tenants and manage their real estate all in one place. This application also functions as a hub for tenants to access their property and pay their rent.',
		},
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
