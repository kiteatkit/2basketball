# Баскетбольная школа "Викинги"

React + TypeScript + Vite приложение для баскетбольной школы на Дальнем Востоке.

## 🚀 Деплой через GitHub Actions

### Настройка деплоя:

1. **Включите GitHub Pages в настройках репозитория:**
   - Перейдите в Settings → Pages
   - Source: выберите "GitHub Actions"

2. **Обновите homepage в package.json:**
   ```json
   "homepage": "https://ВАШ-USERNAME.github.io/2basketball"
   ```

3. **Пуш в main ветку запустит автоматический деплой**

### Локальная разработка:

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Превью production сборки
npm run preview
```

## 🛠 Технологии

- **Frontend:** React 18, TypeScript, Vite
- **UI:** Radix UI, Tailwind CSS, shadcn/ui
- **Forms:** React Hook Form, Zod
- **Charts:** Recharts
- **Routing:** React Router
- **State:** TanStack Query

## 📦 Структура проекта

```
src/
  ├── components/     # React компоненты
  ├── pages/         # Страницы приложения
  ├── hooks/         # Кастомные хуки
  ├── lib/           # Утилиты и конфигурация
  └── main.tsx       # Точка входа
```

## 🔧 Деплой вручную (опционально)

```bash
npm run build
npm run deploy  # Использует gh-pages
```

---

Автоматический деплой настроен через GitHub Actions. Каждый пуш в `main` ветку запускает сборку и деплой на GitHub Pages. 