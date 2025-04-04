import React from 'react';
import './Experience.css';
import nophoto from '../../assets/no photo.jpg';
import varcoons from '../../assets/varcoons.jpg';


const Experience = () => {
    return (
        <div id='experience' className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-content">
                <div className="experience-text">
                    <h3>Internship at Varcons Technologies</h3>
                    <p>
                        Worked as a Full Stack Application Design and Development Intern at Varcons Technologies from February 17, 2025. 
                        As part of a team, I contributed to the development of an Inventory & Billing Management System, 
                        which helps small businesses efficiently manage stock and billing operations.
                    </p>
                    <h3>My Contribution</h3>
                    <p>
                        Focused on front-end design and development, ensuring a seamless user experience. 
                        Developed interactive UI components and improved the system’s responsiveness. 
                        Worked closely with the backend team to integrate API functionalities and enhance system performance.
                    </p>
                    <h3>Technologies Used</h3>
                    <p>
                        Utilized React.js for dynamic UI, ensuring a smooth and user-friendly interface. 
                        Collaborated on API integration with Node.js backend and optimized UI responsiveness using CSS and Tailwind.
                    </p>
                    <h3>Project Impact</h3>
                    <p>
                        The system successfully streamlined inventory tracking and billing, reducing manual errors. 
                        Improved business efficiency by automating stock updates and generating real-time reports.
                    </p>
                </div>
                <div className="experience-images">
                    <img src={varcoons} alt="Company Logo" className="company-logo" />
                    <div className="project-images">
                        <img src={nophoto} alt="Inventory System Screenshot 1" className="experience-img" />
                        <img src={nophoto} alt="Inventory System Screenshot 2" className="experience-img" />
                        <img src={nophoto} alt="Inventory System Screenshot 3" className="experience-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
