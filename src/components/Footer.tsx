import React from 'react';
import { getAssetPath } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={getAssetPath("/logo_red.png")} 
                alt="Викинги Лого" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-russo text-white">ВИКИНГИ</h3>
                <p className="text-sm text-viking-orange">Баскетбольная школа</p>
              </div>
            </div>
            <p className="text-gray-400">
              Воспитываем чемпионов завтрашнего дня 
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-viking-orange">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#documents" className="text-gray-400 hover:text-white transition-colors">Документы</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-viking-orange">Связь с нами</h4>
            <div className="space-y-2">
              <a href="https://t.me/basketballvikings" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <span>Telegram: @basketballvikings</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Баскетбольная школа "Викинги". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
