import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Phone, MessageSquare, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childAge: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Telegram message
    const telegramMessage = `Новая заявка с сайта Викинги:
    
Имя: ${formData.name}
Телефон: ${formData.phone}
Возраст ребенка: ${formData.childAge}
Сообщение: ${formData.message}`;

    // Create Telegram link
    const telegramUrl = `https://t.me/vikings_basketball_bot?start=${encodeURIComponent(telegramMessage)}`;
    
    // Open Telegram
    window.open(telegramUrl, '_blank');
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время через Telegram.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      childAge: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-russo mb-6">
            <span className="gradient-text">ПРИСОЕДИНЯЙТЕСЬ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Запишите вашего ребенка на тренировку прямо сейчас
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <Card className="card-gradient border-viking-orange/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-6 h-6 text-viking-orange" />
                    <div>
                      <div className="font-medium text-gray-800">Telegram</div>
                      <a href="https://t.me/basketballvikings" target="_blank" rel="noopener noreferrer" className="text-viking-orange hover:text-viking-red transition-colors">@basketballvikings</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-viking-orange" />
                    <div>
                      <div className="font-medium text-gray-800">Телефон</div>
                      <div className="text-gray-600">+7 </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-viking-orange" />
                    <div>
                      <div className="font-medium text-gray-800">Адрес</div>
                      <div className="text-gray-600">ул. Спортивная, 15<br />г. Владивосток</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-viking-orange" />
                    <div>
                      <div className="font-medium text-gray-800">Время работы</div>
                      <div className="text-gray-600">Пн, Ср, Пт: 16:00-20:00<br />Сб: 10:00-14:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="animate-scale-in">
            <Card className="card-gradient border-viking-orange/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-viking-orange">Записаться</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Имя родителя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Input
                    id="childAge"
                    name="childAge"
                    type="text"
                    placeholder="Возраст ребенка"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    required
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Комментарий (необязательно)"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition min-h-[60px]"
                  />
                  <Button type="submit" className="w-full bg-viking-orange hover:bg-viking-red text-white font-bold py-2 rounded-lg mt-2 transition-all flex items-center justify-center gap-2 text-base shadow-md">
                    <Send className="w-5 h-5" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
