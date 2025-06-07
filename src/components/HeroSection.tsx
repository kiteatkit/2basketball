import React from 'react';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-viking-orange/10 to-viking-red/5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <img 
            src={getAssetPath("/logo.png")} 
            alt="Викинги Лого" 
            className="h-32 w-32 mx-auto mb-8 animate-bounce-slow"
          />
          <h1 className="text-5xl md:text-7xl font-russo mb-6 text-white leading-tight">
            БАСКЕТБОЛЬНАЯ ШКОЛА
            <span className="block gradient-text text-6xl md:text-8xl mt-2">
              ВИКИНГИ
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Воспитываем чемпионов завтрашнего дня. Профессиональные тренировки для детей всех возрастов и уровней подготовки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-viking-orange to-viking-red hover:from-viking-red hover:to-viking-orange text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Записаться на тренировку
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-viking-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-viking-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
