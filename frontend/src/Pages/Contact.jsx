import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <hr />
            <p>
                We'd love to hear from you! Whether you have a question about our templates, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
