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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToTelegramBot = async (message: string) => {
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      throw new Error('Telegram credentials not configured');
    }

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${errorData.description || 'Unknown error'}`);
    }

    return await response.json();
  };

  const sendViaWebhook = async (message: string) => {
    // Альтернативный способ через webhook сервис (например, через make.com или zapier)
    const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;
    
    if (!WEBHOOK_URL) {
      throw new Error('Webhook not configured');
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        name: formData.name,
        phone: formData.phone,
        childAge: formData.childAge,
        comment: formData.message,
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error('Webhook error');
    }

    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Формируем сообщение для отправки в Telegram
      const message = `🏀 НОВАЯ ЗАЯВКА С САЙТА ВИКИНГИ

👤 Имя родителя: ${formData.name}
📱 Телефон: ${formData.phone}
👶 Возраст ребенка: ${formData.childAge}
💬 Комментарий: ${formData.message || 'Не указан'}

📅 Дата подачи: ${new Date().toLocaleDateString('ru-RU')} ${new Date().toLocaleTimeString('ru-RU')}`;

      let success = false;

      // Пытаемся отправить через Telegram Bot API
      try {
        await sendToTelegramBot(message);
        success = true;
        console.log('Message sent via Telegram Bot API');
      } catch (error) {
        console.warn('Telegram Bot API failed:', error);
        
        // Пытаемся отправить через webhook
        try {
          await sendViaWebhook(message);
          success = true;
          console.log('Message sent via webhook');
        } catch (webhookError) {
          console.warn('Webhook failed:', webhookError);
        }
      }

      if (success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        
        // Сбрасываем форму
        setFormData({
          name: '',
          phone: '',
          childAge: '',
          message: ''
        });
      } else {
        // Fallback: открываем Telegram с готовым сообщением
        console.log('Using fallback: opening Telegram app');
        const telegramUrl = `https://t.me/basketballvikings?text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
        
        toast({
          title: "Переход в Telegram",
          description: "Отправьте подготовленное сообщение в нашем канале.",
        });
        
        // Сбрасываем форму
        setFormData({
          name: '',
          phone: '',
          childAge: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      
      // Fallback: открываем Telegram
      const fallbackMessage = `Новая заявка с сайта Викинги:
      
Имя: ${formData.name}
Телефон: ${formData.phone}
Возраст ребенка: ${formData.childAge}
Сообщение: ${formData.message}`;
      
      const telegramUrl = `https://t.me/basketballvikings?text=${encodeURIComponent(fallbackMessage)}`;
      window.open(telegramUrl, '_blank');
      
      toast({
        title: "Переход в Telegram",
        description: "Произошла ошибка, отправьте сообщение через Telegram.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Показываем статус конфигурации в dev режиме
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;
  const isConfigured = (!!BOT_TOKEN && !!CHAT_ID) || !!WEBHOOK_URL;

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
          
          {/* Показываем статус только в dev режиме */}
          {import.meta.env.DEV && (
            <div className="mt-4 p-3 bg-gray-100 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-gray-600">
                <strong>Dev Mode:</strong> Integration {isConfigured ? '✅ Configured' : '❌ Not Configured'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Bot: {!!BOT_TOKEN && !!CHAT_ID ? '✅' : '❌'} | 
                Webhook: {!!WEBHOOK_URL ? '✅' : '❌'}
              </p>
              {!isConfigured && (
                <p className="text-xs text-red-600 mt-1">
                  Check .env file for credentials
                </p>
              )}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <Card className="card-gradient border-viking-orange/20">
              <CardContent className="p-8">
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
                      <div className="text-gray-600">+7 (XXX) XXX-XX-XX</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-viking-orange" />
                    <div>
                      <div className="font-medium text-gray-800">Основные площадки</div>
                      <div className="text-gray-600">
                        СК Восток-Спорт<br />
                        ул. Лейтенанта Шмидта д.17
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-viking-orange" />
                    <div>
                      <div className="font-medium text-gray-800">Время тренировок</div>
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
                <h3 className="text-2xl font-bold mb-6 text-viking-orange">Записаться на тренировку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Имя родителя *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Телефон (например: +7 123 456-78-90) *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Input
                    id="childAge"
                    name="childAge"
                    type="text"
                    placeholder="Возраст ребенка *"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    required
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Дополнительная информация (опыт игры, особые пожелания и т.д.)"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition min-h-[80px]"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-viking-orange hover:bg-viking-red text-white font-bold py-3 rounded-lg mt-4 transition-all flex items-center justify-center gap-2 text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  * Обязательные поля. Мы свяжемся с вами в течение 24 часов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
