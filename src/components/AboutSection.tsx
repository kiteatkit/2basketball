import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MapPin, 
  Trophy, 
  Users, 
  TrendingUp, 
  BarChart3,
  Dumbbell,
  Medal,
  UsersRound
} from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const trainers = [
  {
    name: "Степан",
    role: "Главный тренер",
    experience: "Многолетний опыт",
    image: getAssetPath("/trainers/image.png"),
    description: "Неоднократный призёр Суперлиги и Кубок России, играл в сборной U-16 и продолжающий играть на высоком любительском уровне!"
  },
  
];

const locations = [
  {
    name: "СК Восток-Спорт",
    address: "ул. Лейтенанта Шмидта д.17"
  },
  {
    name: "МБОУ «СОШ №6»",
    address: "Казанская д.4"
  },
  {
    name: "МАОУ «Лицей «Технический»",
    address: "ул. Ковальчука д.6"
  },
  {
    name: "МБОУ «СОШ №13»",
    address: "ул. Набережная д.1"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-russo mb-6">
            <span className="gradient-text">БАСКЕТБОЛЬНЫЙ КЛУБ «ВИКИНГИ»</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Место, где рождаются чемпионы
          </p>
        </div>

        {/* Филиалы */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {locations.map((location, index) => (
            <Card key={index} className="card-gradient border-viking-orange/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-viking-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Информация о клубе */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              О НАС
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-viking-orange flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-600">Наши воспитанники – постоянные призёры городских и региональных соревнований</p>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-viking-orange flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-600">Сильный тренерский состав с опытом побед</p>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-viking-orange flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-600">Современные методики тренировок</p>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-viking-orange flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-600">Постоянный рост и высокие результаты учеников</p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-scale-in">
            <Card className="card-gradient border-viking-orange/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Dumbbell className="w-6 h-6 text-viking-orange" />
                  <h4 className="text-xl font-bold text-gray-800">Профессиональные тренировки</h4>
                </div>
                <p className="text-gray-600">Современные методики и индивидуальный подход к каждому ребенку</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-viking-orange/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Medal className="w-6 h-6 text-viking-orange" />
                  <h4 className="text-xl font-bold text-gray-800">Участие в турнирах</h4>
                </div>
                <p className="text-gray-600">Регулярные соревнования и турниры для проверки навыков</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-viking-orange/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <UsersRound className="w-6 h-6 text-viking-orange" />
                  <h4 className="text-xl font-bold text-gray-800">Командная работа</h4>
                </div>
                <p className="text-gray-600">Развитие лидерских качеств и умения работать в команде</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Секция тренеров */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-russo mb-6">
            <span className="gradient-text">НАША КОМАНДА</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные тренеры с богатым опытом и любовью к баскетболу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Карточка главного тренера */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-[3/4] w-full">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage src={trainers[0].image} alt={trainers[0].name} className="object-cover" />
                    <AvatarFallback className="bg-viking-orange/10 text-4xl">
                      {trainers[0].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{trainers[0].name}</h3>
                  <p className="text-viking-orange font-semibold">{trainers[0].role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{trainers[0].description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Текст о команде */}
          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-xl text-gray-800 font-medium">
                Наши тренера – молодые специалисты, которые:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-viking-orange">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-viking-orange/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-viking-orange text-xl font-bold">1</span>
                    </div>
                    <p className="text-lg text-gray-700">Недавно играли и знают современный баскетбол изнутри</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-viking-orange">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-viking-orange/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-viking-orange text-xl font-bold">2</span>
                    </div>
                    <p className="text-lg text-gray-700">Говорят с детьми на одном языке и легко находят подход</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-viking-orange">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-viking-orange/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-viking-orange text-xl font-bold">3</span>
                    </div>
                    <p className="text-lg text-gray-700">Полны энергии и новых идей. Тренировки всегда динамичные и нескучные</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
