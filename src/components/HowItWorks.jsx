import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="section-header text-center animate-fade-in-up">
                    <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
                    <p className="section-subtitle">
                        A simple, secure process designed for the busy pet owner.
                    </p>
                </div>

                <div className="timeline">
                    <div className="timeline-item animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="timeline-number">1</div>
                        <div className="timeline-content glass">
                            <h3>Book via App</h3>
                            <p>Choose your preferred time and walker through our easy-to-use mobile application.</p>
                        </div>
                    </div>

                    <div className="timeline-item animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="timeline-number">2</div>
                        <div className="timeline-content glass">
                            <h3>Match & Meet</h3>
                            <p>We match you with a certified, trained cleaner from your area. Meet them virtually or in-person.</p>
                        </div>
                    </div>

                    <div className="timeline-item animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="timeline-number">3</div>
                        <div className="timeline-content glass">
                            <h3>Real-time Tracking</h3>
                            <p>Follow the walk in real-time with GPS tracking. Receive updates and photos along the way.</p>
                        </div>
                    </div>

                    <div className="timeline-item animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="timeline-number">4</div>
                        <div className="timeline-content glass">
                            <h3>Review & Reward</h3>
                            <p>Rate your experience and leave a tip. Knowing you've contributed to someone's extra income.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
