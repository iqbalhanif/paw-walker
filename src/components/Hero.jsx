import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaWalking } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ onBookClick, onCleanerClick }) => {
    const images = [
        'https://images.unsplash.com/photo-1545529468-42764ef8c85f?auto=format&fit=crop&q=80&w=1000', // Dog walking
        'https://images.unsplash.com/photo-1517451330947-7809dead78d5?auto=format&fit=crop&q=80&w=1000', // Person with cat
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000'  // Dog in park
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge animate-fade-in-down">
                        <span className="badge-icon">✨</span>
                        Verified Professional Pet Walkers
                    </div>

                    <h1 className="hero-title animate-fade-in-up">
                        Happy Pets.<br />
                        <span className="text-gradient">Empowered Cleaners.</span>
                    </h1>

                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Paw Walker provides reliable pet walking and care services while creating sustainable additional income for hardworking cleaners in your area. Double the impact with every booking.
                    </p>

                    <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <button className="btn btn-primary btn-lg" onClick={onBookClick}>
                            Book a Walker <FaArrowRight className="ml-2" />
                        </button>
                        <button className="btn btn-secondary-outline btn-lg" onClick={onCleanerClick}>
                            <FaWalking className="mr-2" /> Become a Walker
                        </button>
                    </div>

                    <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="stat-item">
                            <div className="stat-avatars">
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                                <div className="avatar more">+300</div>
                            </div>
                            <div className="stat-text">
                                <strong>Happy Pets</strong> & Owners
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">Rp 200M+</div>
                            <div className="stat-text">Income Generated</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="hero-image-wrapper">
                        <div className="hero-image glass-panel">
                            <div className="image-placeholder" style={{
                                backgroundImage: `url("${images[currentImageIndex]}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'background-image 1s ease-in-out',
                                padding: 0
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
