// Конфигурация Telegram бота
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export interface FormData {
  name: string;
  phone: string;
  childAge: string;
  message: string;
}

export async function sendToTelegram(formData: FormData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram credentials not configured');
    // В случае отсутствия конфигурации, открываем Telegram напрямую
    const telegramMessage = `Новая заявка с сайта Викинги:
    
Имя: ${formData.name}
Телефон: ${formData.phone}
Возраст ребенка: ${formData.childAge}
Сообщение: ${formData.message}`;

    const telegramUrl = `https://t.me/basketballvikings?text=${encodeURIComponent(telegramMessage)}`;
    window.open(telegramUrl, '_blank');
    return true;
  }

  const message = `🏀 Новая заявка с сайта "Викинги"

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
👶 Возраст ребенка: ${formData.childAge}
💬 Сообщение: ${formData.message || 'Не указано'}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    
    // Fallback: открываем Telegram напрямую
    const telegramMessage = `Новая заявка с сайта Викинги:
    
Имя: ${formData.name}
Телефон: ${formData.phone}
Возраст ребенка: ${formData.childAge}
Сообщение: ${formData.message}`;

    const telegramUrl = `https://t.me/basketballvikings?text=${encodeURIComponent(telegramMessage)}`;
    window.open(telegramUrl, '_blank');
    return true;
  }
} 