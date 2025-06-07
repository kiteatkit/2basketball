# Баскетбольная школа "Викинги"

Сайт детской баскетбольной школы "Викинги" на Дальнем Востоке.

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- React Router

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build
```

## Настройка Telegram бота для формы обратной связи

Для работы формы обратной связи через Telegram:

### 1. Создание бота

1. Найдите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Получите TOKEN бота

### 2. Получение Chat ID

1. Добавьте бота в группу или отправьте ему сообщение
2. Перейдите по ссылке: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Найдите `chat.id` в ответе

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

### 4. Настройка для GitHub Pages

В настройках репозитория GitHub:

1. Перейдите в `Settings` → `Secrets and variables` → `Actions`
2. Добавьте переменные:
   - `VITE_TELEGRAM_BOT_TOKEN`: токен вашего бота
   - `VITE_TELEGRAM_CHAT_ID`: ID чата для получения сообщений

### 5. Fallback режим

Если переменные окружения не настроены, форма будет:
- Открывать Telegram с предзаполненным сообщением
- Направлять пользователя в ваш Telegram канал

## Настройка GitHub Pages

Для активации автоматического деплоя на GitHub Pages:

1. Перейдите в настройки репозитория на GitHub
2. В разделе "Pages" выберите источник: **GitHub Actions**
3. Убедитесь, что ваш репозиторий называется `2basketball` (или измените настройку `base` в `vite.config.ts`)
4. При каждом push в ветку `main` сайт будет автоматически обновляться

Сайт будет доступен по адресу: `https://ваш-username.github.io/2basketball/`

## Структура проекта

- `src/` - исходный код приложения
- `public/` - статические файлы  
- `.github/workflows/` - GitHub Actions для автоматического деплоя 