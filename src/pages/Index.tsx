import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import BasketballGallerySection from '@/components/BasketballGallerySection';
import DocumentsSection from '@/components/DocumentsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <BasketballGallerySection />
      <DocumentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
