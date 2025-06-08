// Конфигурация для Telegram Bot
const TELEGRAM_CONFIG = {
  BOT_TOKEN: '7932784712:AAGPJVEOYj4hvXTU7EcSd7VGTG9AOhssZAI',
  CHAT_ID: '343756634',
  API_URL: 'https://api.telegram.org/bot'
};

interface FormData {
  name: string;
  phone: string;
  childAge: string;
  message: string;
}

export const sendToTelegram = async (formData: FormData): Promise<boolean> => {
  try {
    const message = `🏀 Новая заявка с сайта "Викинги"

👤 Имя родителя: ${formData.name}
📱 Телефон: ${formData.phone}
👶 Возраст ребенка: ${formData.childAge}
💬 Сообщение: ${formData.message || 'Не указано'}

📅 Дата: ${new Date().toLocaleString('ru-RU')}`;

    const response = await fetch(`${TELEGRAM_CONFIG.API_URL}${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    return false;
  }
}; 