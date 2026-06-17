/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
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
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
