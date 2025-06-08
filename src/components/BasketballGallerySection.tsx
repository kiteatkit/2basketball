import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Camera } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

// Примерные фото (замените на свои)
const photos = [
  getAssetPath('/gallery/1.jpg'),
  getAssetPath('/gallery/2.jpg'),
  getAssetPath('/gallery/3.jpg'),
  getAssetPath('/gallery/4.jpg'),
  getAssetPath('/gallery/5.jpg'),
];

// SVG фон паркета
const ParquetBackground = () => (
  <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1440" height="400" fill="#f7b97e" />
    <g opacity="0.2">
      {[...Array(20)].map((_, i) => (
        <rect key={i} x={i * 72} y="0" width="36" height="400" fill="#e09e5b" />
      ))}
      {[...Array(10)].map((_, i) => (
        <rect key={i} x={0} y={i * 40} width="1440" height="20" fill="#e09e5b" />
      ))}
    </g>
    {/* 5 силуэтов игроков */}
    <g opacity="0.10">
      {/* Левый игрок (маленький, в защите) */}
      <path d="M120 370 Q130 340 140 370 Q150 400 120 370" fill="#a05a2c" />
      {/* Второй игрок (большой, бросок) */}
      <ellipse cx="400" cy="340" rx="38" ry="70" fill="#a05a2c" />
      {/* Центральный игрок (дриблинг) */}
      <rect x="670" y="320" width="60" height="90" rx="30" fill="#a05a2c" />
      {/* Четвёртый игрок (движение вправо) */}
      <ellipse cx="1050" cy="350" rx="45" ry="60" fill="#a05a2c" />
      {/* Правый игрок (маленький, бросок) */}
      <path d="M1320 370 Q1330 340 1340 370 Q1350 400 1320 370" fill="#a05a2c" />
    </g>
  </svg>
);

// SVG баскетбольный мяч
const BasketballBall = ({ className }: { className?: string }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#FF6A33" stroke="#FF4500" strokeWidth="4" />
    <path d="M24 2v44M2 24h44" stroke="#FF4500" strokeWidth="2" />
    <path d="M8 8c10 10 22 22 32 32M40 8C30 18 18 30 8 40" stroke="#FF4500" strokeWidth="2" />
  </svg>
);

const BasketballGallerySection = () => {
  const ballsRef = useRef<(HTMLDivElement | null)[]>([]);
  const photosRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Анимация подпрыгивания мячей при скролле
  useEffect(() => {
    const handleScroll = () => {
      ballsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.style.transform = 'translateY(-30px) scale(1.1)';
          el.style.transition = 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)';
          setTimeout(() => {
            if (el) el.style.transform = '';
          }, 400 + i * 80);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Анимация появления фото (эффект попадания в кольцо)
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('in-hoop');
        }
      });
    }, { threshold: 0.1 });
    
    // Наблюдаем за всеми фото элементами
    const allPhotos = document.querySelectorAll('.gallery-photo');
    allPhotos.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#f7b97e]">
      <ParquetBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-russo mb-8 md:mb-10 text-center text-viking-orange drop-shadow-lg">Галерея</h2>
        
        {/* Баскетбольные мячи - скрыть на мобильных */}
        <div className="hidden md:flex gap-8 items-end mb-8 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={el => ballsRef.current[i] = el}
              className="transition-transform duration-500"
              style={{ willChange: 'transform' }}
            >
              <BasketballBall />
            </div>
          ))}
        </div>

        {/* Мобильная версия - простая сетка */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
            {photos.slice(0, 4).map((photo, index) => (
              <div
                key={index}
                className="gallery-photo relative bg-white rounded-2xl shadow-lg flex items-center justify-center opacity-0 transform scale-95 transition-all duration-700 cursor-pointer hover:scale-105 aspect-[3/4]"
                onClick={() => handlePhotoClick(photo)}
              >
                <img 
                  src={photo} 
                  alt="basketball gallery" 
                  className="rounded-xl w-full h-full object-cover shadow-md" 
                  draggable={false} 
                />
              </div>
            ))}
          </div>
          {/* Последнее фото по центру */}
          <div className="flex justify-center">
            <div
              className="gallery-photo relative w-32 sm:w-40 bg-white rounded-2xl shadow-lg flex items-center justify-center opacity-0 transform scale-95 transition-all duration-700 cursor-pointer hover:scale-105 aspect-[3/4]"
              onClick={() => handlePhotoClick(photos[4])}
            >
              <img 
                src={photos[4]} 
                alt="basketball gallery" 
                className="rounded-xl w-full h-full object-cover shadow-md" 
                draggable={false} 
              />
            </div>
          </div>
        </div>

        {/* Десктопная версия - оригинальный дизайн */}
        <div className="hidden md:block">
          <div className="flex flex-col gap-8 pb-8 relative" style={{ minHeight: 400 }}>
            {/* Top row with 3 photos */}
            <div className="flex gap-4 justify-center items-end">
              {/* Left photo */}
              <div
                ref={el => photosRef.current[0] = el}
                className="gallery-photo relative w-32 lg:w-40 h-44 lg:h-56 bg-white rounded-3xl shadow-xl flex-shrink-0 flex items-center justify-center opacity-0 transform -translate-y-3 scale-95 transition-all duration-700 cursor-pointer hover:scale-105"
                onClick={() => handlePhotoClick(photos[0])}
              >
                <svg className="absolute -top-6 left-1/2 -translate-x-1/2" width="60" height="24" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="24" rx="28" ry="8" fill="#FF6A33" fillOpacity="0.18" />
                  <ellipse cx="40" cy="24" rx="20" ry="6" fill="#FF4500" fillOpacity="0.12" />
                </svg>
                <img src={photos[0]} alt="basketball gallery" className="rounded-2xl w-28 lg:w-36 h-36 lg:h-48 object-cover z-10 shadow-md" draggable={false} />
              </div>
              {/* Center photo */}
              <div
                ref={el => photosRef.current[1] = el}
                className="gallery-photo relative w-40 lg:w-48 h-52 lg:h-64 bg-white rounded-3xl shadow-xl flex-shrink-0 flex items-center justify-center opacity-0 transform -translate-y-0 scale-100 transition-all duration-700 cursor-pointer hover:scale-105"
                style={{ zIndex: 10 }}
                onClick={() => handlePhotoClick(photos[1])}
              >
                <svg className="absolute -top-6 left-1/2 -translate-x-1/2" width="60" height="24" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="24" rx="28" ry="8" fill="#FF6A33" fillOpacity="0.18" />
                  <ellipse cx="40" cy="24" rx="20" ry="6" fill="#FF4500" fillOpacity="0.12" />
                </svg>
                <img src={photos[1]} alt="basketball gallery" className="rounded-2xl w-36 lg:w-44 h-44 lg:h-56 object-cover z-10 shadow-md" draggable={false} />
              </div>
              {/* Right photo */}
              <div
                ref={el => photosRef.current[2] = el}
                className="gallery-photo relative w-32 lg:w-40 h-44 lg:h-56 bg-white rounded-3xl shadow-xl flex-shrink-0 flex items-center justify-center opacity-0 transform -translate-y-3 scale-95 transition-all duration-700 cursor-pointer hover:scale-105"
                onClick={() => handlePhotoClick(photos[2])}
              >
                <svg className="absolute -top-6 left-1/2 -translate-x-1/2" width="60" height="24" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="24" rx="28" ry="8" fill="#FF6A33" fillOpacity="0.18" />
                  <ellipse cx="40" cy="24" rx="20" ry="6" fill="#FF4500" fillOpacity="0.12" />
                </svg>
                <img src={photos[2]} alt="basketball gallery" className="rounded-2xl w-28 lg:w-36 h-36 lg:h-48 object-cover z-10 shadow-md" draggable={false} />
              </div>
            </div>

            {/* Bottom row with 2 photos */}
            <div className="flex justify-between px-4 lg:px-8 items-center">
              {/* Bottom left photo */}
              <div
                ref={el => photosRef.current[3] = el}
                className="gallery-photo relative w-32 lg:w-40 h-44 lg:h-56 bg-white rounded-3xl shadow-xl flex-shrink-0 flex items-center justify-center opacity-0 transform -translate-y-3 scale-95 transition-all duration-700 cursor-pointer hover:scale-105"
                onClick={() => handlePhotoClick(photos[3])}
              >
                <svg className="absolute -top-6 left-1/2 -translate-x-1/2" width="60" height="24" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="24" rx="28" ry="8" fill="#FF6A33" fillOpacity="0.18" />
                  <ellipse cx="40" cy="24" rx="20" ry="6" fill="#FF4500" fillOpacity="0.12" />
                </svg>
                <img src={photos[3]} alt="basketball gallery" className="rounded-2xl w-28 lg:w-36 h-36 lg:h-48 object-cover z-10 shadow-md" draggable={false} />
              </div>

              {/* Basketball Hoop */}
              <div className="relative w-32 lg:w-48 h-44 lg:h-56 flex items-end justify-center">
                <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform translate-y-8 lg:w-[120px] lg:h-[120px]">
                  {/* Backboard */}
                  <rect x="20" y="20" width="80" height="60" rx="4" fill="#FF6A33" fillOpacity="0.2" stroke="#FF4500" strokeWidth="2"/>
                  {/* Hoop */}
                  <circle cx="60" cy="80" r="25" fill="none" stroke="#FF4500" strokeWidth="3"/>
                  {/* Net */}
                  <path d="M60 80 Q60 90 60 100 Q65 95 70 100 Q75 95 80 100 Q85 95 90 100 Q95 95 100 100 Q100 90 100 80 Q90 80 80 80 Q70 80 60 80" 
                        fill="none" stroke="#FF4500" strokeWidth="1" strokeDasharray="2 2"/>
                  {/* Support */}
                  <path d="M20 50 L40 50" stroke="#FF4500" strokeWidth="2"/>
                  <path d="M80 50 L100 50" stroke="#FF4500" strokeWidth="2"/>
                </svg>
              </div>

              {/* Bottom right photo */}
              <div
                ref={el => photosRef.current[4] = el}
                className="gallery-photo relative w-32 lg:w-40 h-44 lg:h-56 bg-white rounded-3xl shadow-xl flex-shrink-0 flex items-center justify-center opacity-0 transform -translate-y-3 scale-95 transition-all duration-700 cursor-pointer hover:scale-105"
                onClick={() => handlePhotoClick(photos[4])}
              >
                <svg className="absolute -top-6 left-1/2 -translate-x-1/2" width="60" height="24" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="24" rx="28" ry="8" fill="#FF6A33" fillOpacity="0.18" />
                  <ellipse cx="40" cy="24" rx="20" ry="6" fill="#FF4500" fillOpacity="0.12" />
                </svg>
                <img src={photos[4]} alt="basketball gallery" className="rounded-2xl w-28 lg:w-36 h-36 lg:h-48 object-cover z-10 shadow-md" draggable={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-viking-orange transition-colors"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <img 
              src={selectedPhoto} 
              alt="Full size" 
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <Card className="max-w-xl mx-auto border-viking-orange/20">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Следите за нами</h3>
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Больше видео и фотографий с тренировок в нашем Telegram канале
            </p>
            <div className="flex justify-center">
              <a 
                href="https://t.me/basketballvikings" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-viking-orange text-white font-semibold rounded-lg hover:bg-viking-red transition-colors"
              >
                <Video className="w-5 h-5" />
                <span>Перейти в Telegram канал</span>
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Стили для анимаций */}
      <style>{`
        .in-hoop {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
          transition: all 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default BasketballGallerySection; 