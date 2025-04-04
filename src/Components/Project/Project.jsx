import React from 'react';
import { useNavigate } from 'react-router-dom';
import tourism from '../../assets/tourism.jpg';
import banking from '../../assets/banking.png';
import music from '../../assets/music.jpg';
import landslide from '../../assets/landslide.jpg';
import signature from '../../assets/signature.png';
import trading from '../../assets/trading.png';

import './Project.css';

const projects = [
    {
        id: 1,
        title: "Go Karnataka Tours and Travels",
        description: "A web-based platform for managing tour packages and bookings.",
        image: tourism,
        link: "/projects/tourism"
    },
    {
        id: 2,
        title: "Smart Banking System",
        description: "An advanced and modern banking application.",
        image: banking,
        link: "/projects/banking"
    },
    {
        id: 3,
        title: "Stock Trading Prediction System",
        description: "AI-based stock market trend prediction system.",
        image: trading,
        link: "/projects/trading"
    },
    {
        id: 4,
        title: "IoT-Based Landslide Detection",
        description: "Real-time monitoring system for predicting landslides.",
        image: landslide,
        link: "/projects/landslide"
    },
    {
        id: 5,
        title: "Smart Signature and Face Verification",
        description: "Advanced signature and face recognition system.",
        image: signature,
        link: "/projects/signature"
    },
    {
        id: 6,
        title: "AI Music Playlist Generator",
        description: "An AI-driven music recommendation system based on mood.",
        image: music,
        link: "/projects/music"
    },
];

const Projects = () => {
    const navigate = useNavigate();

    return (
        <div id='project' className="projects-section">
            <div className="section-title">
                <h1>My Projects</h1>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="project-card" 
                        onClick={() => navigate(project.link)}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
