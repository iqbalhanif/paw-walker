import React from 'react';
import { FaGraduationCap, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header text-center animate-fade-in-up">
                    <h2 className="section-title">The Paw Walker <span className="text-gradient">Advantage</span></h2>
                    <p className="section-subtitle">
                        More than just a pet walking service. We are a sociopreneur platform dedicated to bringing positive change to our community.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-card glass animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="icon-wrapper primary-bg">
                            <FaGraduationCap className="icon" />
                        </div>
                        <h3>Professional Training</h3>
                        <p>Every cleaner turned walker undergoes rigorous training in pet handling, safety protocols, and customer service to ensure the best care for your furry friend.</p>
                    </div>

                    <div className="about-card glass animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="icon-wrapper secondary-bg">
                            <FaHandHoldingHeart className="icon" />
                        </div>
                        <h3>Empowering Cleaners</h3>
                        <p>We provide opportunities for hardworking cleaners (office boys, security, etc.) to earn an extra Rp 2-4 million/month in their free time.</p>
                    </div>

                    <div className="about-card glass animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="icon-wrapper primary-dark-bg">
                            <FaShieldAlt className="icon" />
                        </div>
                        <h3>Trust & Safety</h3>
                        <p>Our walkers are verified individuals already working in your environment. Combined with GPS tracking and insurance, your pet is in safe hands.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
