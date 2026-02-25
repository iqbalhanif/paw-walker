import React, { useState, useEffect } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { FaPaw } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onBookClick, onCleanerClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'glass navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="/" className="navbar-logo">
                    <FaPaw className="logo-icon" />
                    <span className="logo-text">Paw Walker</span>
                </a>

                <div className="navbar-links desktop-only">
                    <a href="#how-it-works" className="nav-link">How it Works</a>
                    <a href="#impact" className="nav-link">Social Impact</a>
                </div>

                <button className="mobile-menu-btn mobile-only" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <BiX size={28} /> : <BiMenuAltRight size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu mobile-only ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="#how-it-works" className="mobile-nav-link" onClick={toggleMobileMenu}>How it Works</a>
                <a href="#impact" className="mobile-nav-link" onClick={toggleMobileMenu}>Social Impact</a>
            </div>
        </nav>
    );
};

export default Navbar;
