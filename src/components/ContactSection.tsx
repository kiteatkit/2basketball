import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { sendToTelegram } from '@/lib/telegram';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childAge: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.childAge) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await sendToTelegram(formData);
      
      if (success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
        });

        // Reset form
        setFormData({
          name: '',
          phone: '',
          childAge: '',
          message: ''
        });
      } else {
        throw new Error('Не удалось отправить заявку');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить заявку. Пожалуйста, свяжитесь с нами напрямую через Telegram.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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
                    placeholder="Имя родителя *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Input
                    id="childAge"
                    name="childAge"
                    type="text"
                    placeholder="Возраст ребенка *"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition"
                  />
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Комментарий (необязательно)"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="bg-white/80 focus:bg-white border border-viking-orange/30 rounded-lg px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-viking-orange/40 transition min-h-[60px]"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-viking-orange hover:bg-viking-red text-white font-bold py-2 rounded-lg mt-2 transition-all flex items-center justify-center gap-2 text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Отправить
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  * - обязательные поля
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
