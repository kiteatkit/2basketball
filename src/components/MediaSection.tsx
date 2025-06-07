import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Video, Camera, Trophy } from 'lucide-react';

const MediaSection = () => {
  const videos = [
    {
      title: 'Тренировка младшей группы',
      description: 'Основы дриблинга и бросков для детей 6-8 лет',
      thumbnail: ''
    },
    {
      title: 'Командная игра',
      description: 'Отработка командных тактик и взаимодействия',
      thumbnail: ''
    },
    {
      title: 'Турнир "Викинги 2024"',
      description: 'Highlights с нашего ежегодного турнира',
      thumbnail: ''
    },
    {
      title: 'Индивидуальные тренировки',
      description: 'Персональная работа с техникой броска',
      thumbnail: ''
    }
  ];

  return (
    <section id="media" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-russo mb-6">
            <span className="gradient-text">МЕДИА</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Видео с наших тренировок и турниров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden border-2 hover:border-viking-orange/30">
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-viking-orange group-hover:text-white transition-all duration-300">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-viking-orange transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;