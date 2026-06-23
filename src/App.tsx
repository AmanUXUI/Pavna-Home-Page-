import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import LeadershipSlider from './components/LeadershipSlider';
import CambridgeSection from './components/CambridgeSection';
import AboutSection from './components/AboutSection';
import WhatSetsUsApart from './components/WhatSetsUsApart';
import ImageGallery from './components/ImageGallery';
import BoardingSection from './components/BoardingSection';
import PavnaPromise from './components/PavnaPromise';
import ParentTestimonials from './components/ParentTestimonials';
import FAQSection from './components/FAQSection';
import DistinguishedGuests from './components/DistinguishedGuests';
import LifeAtPavnaGallery from './components/LifeAtPavnaGallery';
import FooterBanner from './components/FooterBanner';
import Footer from './components/Footer';
import AboutOverview from './components/AboutOverview';
import ChairmansMessage from './components/ChairmansMessage';
import PrincipalsMessage from './components/PrincipalsMessage';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Immediately scroll to top when changing routes
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash state
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isAboutOverview = currentHash === '#about-overview';
  const isChairmansMessage = currentHash === '#chairmans-message';
  const isPrincipalsMessage = currentHash === '#principals-message';

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {isAboutOverview ? (
          <AboutOverview />
        ) : isChairmansMessage ? (
          <ChairmansMessage />
        ) : isPrincipalsMessage ? (
          <PrincipalsMessage />
        ) : (
          <>
            <HeroSlider />
            <CambridgeSection />
            <AboutSection />
            <WhatSetsUsApart />
            <ImageGallery />
            <BoardingSection />
            <PavnaPromise />
            <LeadershipSlider />
            <LifeAtPavnaGallery />
            <ParentTestimonials />
            <DistinguishedGuests />
            <FooterBanner />
            <FAQSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
