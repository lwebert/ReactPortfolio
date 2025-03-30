import './Contact.css';
import { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
	const [contactName, setContactName] = useState('');
	const [contactEmail, setContactEmail] = useState('');
	const [contactMessage, setContactMessage] = useState('');

	const [errors, setErrors] = useState(''); // To store validation errors

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// const { target } = e;
		// const inputname = target.name;
		// const inputvalue = target.value;

		if (name === 'contact-name') {
			return setContactName(value);
		} else if (name === 'contact-email') {
			return setContactEmail(value);
		} else if (name === 'contact-message') {
			return setContactMessage(value);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(
			'Name: ',
			contactName,
			'Email: ',
			contactEmail,
			'Message: ',
			contactMessage
		);

		//TODO: Error handling for input validation? Look at 12-16 for ideas.
		if (contactName == '' || !contactName) {
			setErrors('Please provide a contact name.');
			return;
		} else if (!validateEmail(contactEmail) || !contactEmail) {
			setErrors('Email input is invalid.');
			return;
		} else if (contactMessage == '' || !contactMessage) {
			setErrors('Please provide a message.');
			return;
		}

		// if (errors == '' || !errors) {
		setErrors('');

		alert(`${contactName}, thank you for your message!`);

		setContactName('');
		setContactEmail('');
		setContactMessage('');
		setErrors('');
		// }
	};

	return (
		<div className="contact-container">
			{/* <div className="contact-container text-center"> */}
			<h3 className="contact-header">Contact Me!</h3>
			<form className="form" onSubmit={handleFormSubmit}>
				<label>Name:</label>
				<input
					value={contactName}
					name="contact-name"
					onChange={handleInputChange}
					type="text"
					// placeholder="Enter your name here."
					id="contact-name"
					// onBlur={handleBlur}
				/>
				{/* {errors['contact-name'] && (
					<p className="error">{errors['contact-name']}</p>
				)} */}

				<label>Email:</label>
				<input
					value={contactEmail}
					name="contact-email"
					onChange={handleInputChange}
					type="email"
					placeholder="name@example.com"
					id="contact-email"
					// onBlur={handleBlur}
				/>
				{/* {errors['contact-email'] && (
					<p className="error">{errors['contact-email']}</p>
				)} */}

				<label>Message:</label>
				<input
					value={contactMessage}
					name="contact-message"
					onChange={handleInputChange}
					type="text"
					placeholder="Enter your message here."
					id="contact-message"
					// onBlur={handleBlur}
				/>
				{/* {errors['contact-message'] && (
					<p className="error">{errors['contact-message']}</p>
				)} */}

				<button type="submit">Submit</button>
			</form>

			{errors ? (
				<div>
					<p className="error-text">{errors}</p>
				</div>
			) : null}
		</div>
	);
}

//create form with inputs

// TODO: •	WHEN I am presented with the Contact section, THEN I see a contact form with fields for a name, an email address, and a message
// TODO: •	WHEN I move my cursor out of one of the form fields without entering text, THEN I receive a notification that this field is required
// TODO: •	WHEN I enter text into the email address field, THEN I receive a notification if I have entered an invalid email address

// TODO: Actually get it to send us an email
