
export default function App() {
	return (
		<div></div>
	);
};




// import { useState } from 'react';
// import './App.css';

// //set up routing - import BrowserRouter and Route from react-router-dom
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// //TODO: import all components and pages here
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';
// import Error from './pages/Error';

// //TODO: Define Routes -- do in main instead
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <About />,
// 		//TODO: WHEN I load the portfolio the first time, THEN the About Me title and section are selected by default
// 	},
// 	{
// 		path: '/portfolio',
// 		element: <Portfolio />,
// 	},
// 	{
// 		path: '/contact',
// 		element: <Contact />,
// 	},
// 	{
// 		path: '/resume',
// 		element: <Resume />,
// 	},
// ]);

// // TODO: WHEN I load the portfolio, THEN I am presented with a page containing a header, a section for content, and a footer

// export default function App() {
// 	return (
// 		// <RouterProvider router={router} />
		
// 	);
// }





//...Vanilla React...

//TODO: define array of project data
// const projectList = [
// 	{
// 		id: 1,
// 		name: '',
// 		github: '',
// 		image: '',
// 	},
// 	{
// 		id: 2,
// 		name: '',
// 		github: '',
// 		image: '',
// 	},
// 	{
// 		id: 3,
// 		name: '',
// 		github: '',
// 		image: '',
// 	},
// ];

// function App() {
// 	//TODO: WHEN I load the portfolio the first time, THEN the About Me title and section are selected by default
// 	//set state
// 	const [currentPage, setCurrentPage] = useState('About');

// 	const renderPage = () => {
// 		if (currentPage === 'About') {
// 			return <About />;
// 		}
// 		if (currentPage === 'Portfolio') {
// 			return <Portfolio />;
// 		}
// 		if (currentPage === 'Contact') {
// 			return <Contact />;
// 		}
// 		if (currentPage === 'Resume') {
// 			return <Resume />;
// 		}
// 		return <Error />;
// 	};

// 	return <Projects projects={projectList} />;
// }

// export default App;
