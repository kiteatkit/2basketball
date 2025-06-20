import React from 'react';
import { getAssetPath } from '@/lib/utils';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-viking-orange/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={getAssetPath("/logo_red.png")} 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-xl font-russo text-white">ВИКИНГИ</h1>
              <p className="text-sm text-viking-orange font-medium">Баскетбольная школа</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-viking-orange transition-colors">Главная</a>
            <a href="#about" className="text-white hover:text-viking-orange transition-colors">О нас</a>
            <a href="#achievements" className="text-white hover:text-viking-orange transition-colors">Достижения</a>
            <a href="#documents" className="text-white hover:text-viking-orange transition-colors">Документы</a>
            <a href="#contact" className="text-white hover:text-viking-orange transition-colors">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;