import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Users, Calendar, Star, Target } from 'lucide-react';

const AchievementsSection = () => {
  const majorAchievements = [
    {
      year: "2025",
      title: "Кубок «Зенит» по баскетболу до 12 лет",
      description: "3-е место"
    },
    {
      year: "2025",
      title: "Кубок посвящённый «Дню победы» до 16 лет",
      description: "2-е место"
    },
    {
      year: "2025", 
      title: "Первенство Приморского края среди 2013 года рождения",
      description: "2-е место"
    },
    {
      year: "2024",
      title: "Первенство МБУ СШ «Богатырь» г. Владивосток среди 2009 г.р.",
      description: "1-е место"
    },
    {
      year: "2024",
      title: "Первенство Приморского края среди юниоров до 17 лет",
      description: "2-е место"
    },
    {
      year: "2024",
      title: "Первенство МБУ СШ «Богатырь» г. Владивосток среди 2007 г.р.",
      description: "3-е место"
    }
  ];

  const allAchievements = [
    { year: "2025", place: "3", title: "Кубок «Зенит» по баскетболу до 12 лет" },
    { year: "2025", place: "2", title: "Кубок посвящённый «Дню победы» до 16 лет" },
    { year: "2025", place: "2", title: "Первенство Приморского края среди 2013 года рождения" },
    { year: "2024", place: "2", title: "Первенство Приморского края среди юниоров до 17 лет" },
    { year: "2024", place: "1", title: "Первенство МБУ СШ «Богатырь» г. Владивосток среди 2009 г.р." },
    { year: "2024", place: "3", title: "Первенство МБУ СШ «Богатырь» г. Владивосток среди 2007 г.р." },
    { year: "2024", place: "2", title: "Первенство Приморского края по баскетболу до 17 лет" },
    { year: "2023", place: "3", title: "Первенство Приморского края по баскетболу среди 2007 года рождения" },
    { year: "2023", place: "3", title: "Краевые соревнования по баскетболу «Тигрята Приморья»" },
    { year: "2022", place: "3", title: "Краевой турнир «Fesco» среди 2010 года рождения" },
    { year: "2022", place: "1", title: "День баскетбола" },
    { year: "2022", place: "2", title: "Фестиваль «Тигрята Приморья» по 2009 году рождения" },
    { year: "2020", place: "2", title: "День баскетбола" },
    { year: "2019", place: "1", title: "Открытая лига «Артём» по баскетболу 3х3" }
  ];

  const getPlaceColor = (place) => {
    switch(place) {
      case "1": return "text-yellow-500 bg-yellow-50";
      case "2": return "text-gray-500 bg-gray-50";
      case "3": return "text-orange-600 bg-orange-50";
      default: return "text-viking-orange bg-orange-50";
    }
  };

  const getPlaceText = (place) => {
    switch(place) {
      case "1": return "🥇 1-е место";
      case "2": return "🥈 2-е место";
      case "3": return "🥉 3-е место";
      default: return "🏆 Призёр";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-viking-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-viking-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-russo mb-6">
            <span className="gradient-text">НАШИ ДОСТИЖЕНИЯ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Гордимся успехами наших воспитанников и постоянно стремимся к новым вершинам
          </p>
        </div>

        {/* Основные достижения */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Недавние победы школы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {majorAchievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-viking-orange/20 card-gradient relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-viking-orange to-viking-red opacity-10 rounded-bl-full"></div>
                <CardContent className="p-6 md:p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-viking-orange to-viking-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      {achievement.year}
                    </div>
                    <Trophy className="w-5 h-5 text-viking-orange" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-viking-orange transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Полный список достижений */}
        <div className="animate-fade-in mt-16" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Все наши достижения
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {allAchievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group hover:scale-102 transition-all duration-300 border-viking-orange/20 card-gradient"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${getPlaceColor(achievement.place)}`}>
                      {getPlaceText(achievement.place)}
                    </div>
                    <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                      {achievement.year}
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-viking-orange transition-colors duration-300">
                    {achievement.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="max-w-2xl mx-auto border-viking-orange/20 card-gradient">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Star className="w-8 h-8 text-viking-orange" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Станьте частью нашей истории успеха!
                </h3>
                <Star className="w-8 h-8 text-viking-orange" />
              </div>
              <p className="text-gray-600 mb-6">
                Присоединяйтесь к баскетбольной школе "Викинги" и пишите вместе с нами новые страницы побед!
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-viking-orange to-viking-red hover:from-viking-red hover:to-viking-orange text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Записаться на тренировку
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Дополнительные стили */}
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #FF4500, #FF2500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-gradient {
          background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          backdrop-filter: blur(10px);
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection; 