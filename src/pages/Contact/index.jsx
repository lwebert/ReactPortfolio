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

	const handleBlur = (e) => {
		setErrors('');

		const { name, value } = e.target;

		console.log('name: ', name, 'value: ', value);
		if (value === undefined || value === null || !value || value === '') {
			if (name === 'contact-name') {
				setErrors(`Name is a required field.`);
				return;
			} else if (name === 'contact-email') {
				setErrors(`Email is a required field.`);
				return;
			} else if (name === 'contact-message') {
				setErrors(`Message is a required field.`);
				return;
			}
		}
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();

		// if (contactName == '' || !contactName) {
		// 	setErrors('Please provide a contact name.');
		// 	return;
		// } else if (!validateEmail(contactEmail) || !contactEmail) {
		// 	setErrors('Email input is invalid.');
		// 	return;
		// } else if (contactMessage == '' || !contactMessage) {
		// 	setErrors('Please provide a message.');
		// 	return;
		// }

		handleBlur(e);

		if (!validateEmail(contactEmail) || !contactEmail) {
			setErrors('Email input is invalid.');
			return;
		}
		
		setErrors('');

		alert(`${contactName}, thank you for your message!`);

		setContactName('');
		setContactEmail('');
		setContactMessage('');
		setErrors('');
	};

	return (
		<div className="contact-container">
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
					onBlur={handleBlur}
				/>

				<label>Email:</label>
				<input
					value={contactEmail}
					name="contact-email"
					onChange={handleInputChange}
					type="email"
					placeholder="name@example.com"
					id="contact-email"
					onBlur={handleBlur}
				/>

				<label>Message:</label>
				<input
					value={contactMessage}
					name="contact-message"
					onChange={handleInputChange}
					type="text"
					placeholder="Enter your message here."
					id="contact-message"
					onBlur={handleBlur}
				/>

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
