import './About.css';
import LaurenImg from '../../assets/Lauren.jpg'

export default function About() {
	return (
		<div className="about-container">
			<h3>Lauren Webert</h3>

			<div className="img-container">
				<img
					src={LaurenImg}
					alt="Photo of Lauren Webert"
				/>
			</div>

			<p>
				Hello! My name is Lauren Webert, and I am an aspiring full-stack
				web developer based in Omaha, Nebraska.
			</p>
			<p>
				I graduated with a degree in Psychology and a minor in
				Biological Physics from Creighton University in 2022. I
				currently work as a Research Assistant II at the Institute for
				Human Neuroscience, where I process large quantities of
				neuroimaging data, run complex statistical models, and develop
				code to streamline organizational and computational processes.
				Through this position, I discovered my passion for coding, and
				have worked hard to develop my coding skills in Matlab and R.
			</p>
			<p>
				I am currently completing a coding bootcamp at the University of
				Denver, Colorado, and am on track to earn a certificate in
				full-stack web development in April, 2025. Through this
				bootcamp, I have become proficient in the programming languages
				JavaScript, SQL, TypeScript, and Python, as well as front-end
				and back-end development skills including CSS, Web APIs,
				SpostgreSQL, Express, ReactJS, and NodeJS. Please look through
				this portfolio of some of my work, and reach out with any
				questions you may have!
			</p>
		</div>
	);
}
