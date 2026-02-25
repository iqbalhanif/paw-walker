import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPaw } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo">
                            <FaPaw className="logo-icon" />
                            <span className="logo-text">Paw Walker</span>
                        </a>
                        <p className="footer-description">
                            A sociopreneur platform empowering cleaners through professional pet walking and care services. Happy Pets, Empowered Cleaners.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#how-it-works">How it Works</a></li>
                            <li><a href="#impact">Our Impact</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#book">Book a Walker</a></li>
                            <li><a href="#cleaners">Become a Walker</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#corporate">Corporate Plans</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>Email: hello@pawwalker.id</p>
                        <p>Phone: +62 812 3456 7890</p>
                        <p>Jakarta, Indonesia</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Paw Walker. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
