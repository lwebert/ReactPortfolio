import './Contact.css';
import { useState } from 'react';

export default function Contact() {
	const [contactName, setContactName] = useState('');
	const [contactEmail, setContactEmail] = useState('');
	const [contactMessage, setContactMessage] = useState('');

	const [errors, setErrors] = useState({}); // To store validation errors

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// const { target } = e;
		// const inputname = target.name;
		// const inputvalue = target.value;
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

		if (name === 'contact-name') {
			return setContactName(value);
		} else if (name === 'contact-email') {
			return setContactEmail(value);
		} else if (name === 'contact-message') {
			return setContactMessage(value);
		}

	};

	const handleBlur = (e) => {
		const { name, value } = e.target;

		if (!value.trim()) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: `${name} is required.`,
			}));
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		//TODO: Error handling for input validation? Look at 12-16 for ideas.
		let newErrors = {};

		if (!contactName.trim()) newErrors['contact-name'] = 'Name is required.';
		if (!contactEmail.trim())
			newErrors['contact-email'] = 'Email is required.';
		if (!contactMessage.trim())
			newErrors['contact-message'] = 'Message is required.';

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		//

		alert(`${contactName}, thank you for your message!`);

		setContactName('');
		setContactEmail('');
		setContactMessage('');
	};

	return (
		// <div className="contact-container">
		<div className="contact-container text-center">
			<div className="contact-header">Contact Me!</div>
			<form className="form" onSubmit={handleFormSubmit}>
				<input
					value={contactName}
					name="contact-name"
					onChange={handleInputChange}
					type="text"
					id="contact-name"
					//
					onBlur={handleBlur}
				/>
				{errors['contact-name'] && (
					<p className="error">{errors['contact-name']}</p>
				)}

				<input
					value={contactEmail}
					name="contact-email"
					onChange={handleInputChange}
					type="email"
					placeholder="name@example.com"
					id="contact-email"
					onBlur={handleBlur}
				/>
				{errors['contact-email'] && (
					<p className="error">{errors['contact-email']}</p>
				)}

				<input
					value={contactMessage}
					name="contact-message"
					onChange={handleInputChange}
					type="text"
					placeholder="Enter your message here."
					id="contact-message"
					onBlur={handleBlur}
				/>
				{errors['contact-message'] && (
					<p className="error">{errors['contact-message']}</p>
				)}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

//create form with inputs

// TODO: •	WHEN I am presented with the Contact section, THEN I see a contact form with fields for a name, an email address, and a message
// TODO: •	WHEN I move my cursor out of one of the form fields without entering text, THEN I receive a notification that this field is required
// TODO: •	WHEN I enter text into the email address field, THEN I receive a notification if I have entered an invalid email address

// TODO: Actually get it to send us an email
