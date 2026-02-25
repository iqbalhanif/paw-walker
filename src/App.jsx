import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BookingForm from './components/BookingForm';
import CleanerForm from './components/CleanerForm';

function App() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [isCleanerOpen, setIsCleanerOpen] = React.useState(false);

  return (
    <div className="app-container">
      <Navbar
        onBookClick={() => setIsBookingOpen(true)}
        onCleanerClick={() => setIsCleanerOpen(true)}
      />
      <Routes>
        <Route path="/" element={
          <div className="landing-page">
            <main>
              <Hero onBookClick={() => setIsBookingOpen(true)} onCleanerClick={() => setIsCleanerOpen(true)} />
              <About />
              <HowItWorks />
              <Impact />
            </main>
          </div>
        } />
      </Routes>
      <Footer />

      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Book a Walker"
      >
        <BookingForm onClose={() => setIsBookingOpen(false)} />
      </Modal>

      <Modal
        isOpen={isCleanerOpen}
        onClose={() => setIsCleanerOpen(false)}
        title="Become a Walker"
      >
        <CleanerForm onClose={() => setIsCleanerOpen(false)} />
      </Modal>
    </div>
  );
}

export default App;
