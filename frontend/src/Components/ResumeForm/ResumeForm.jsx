// ResumeForm.js
import React, { useState } from "react";
import './ResumeForm.css'; // Import a CSS file for styling

const ResumeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        experience: '',
        skills: '',
        certifications: '',
        languages: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="resume-form" onSubmit={handleSubmit}>
            <h2>Resume Information</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="education">Education</label>
                <input type="text" id="education" name="education" placeholder="Education" value={formData.education} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <textarea id="experience" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <textarea id="skills" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="certifications">Certifications</label>
                <input type="text" id="certifications" name="certifications" placeholder="Certifications" value={formData.certifications} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="languages">Languages</label>
                <input type="text" id="languages" name="languages" placeholder="Languages" value={formData.languages} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-button">Place Order</button>
        </form>
    );
};

export default ResumeForm;
